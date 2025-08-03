import { Directive, input } from '@angular/core'
import { FormControl } from '@angular/forms'
import { map, of, startWith, merge, switchMap } from 'rxjs'
import { toObservable, toSignal } from '@angular/core/rxjs-interop'
import { Option } from '@shared/forms/interfaces/options'

@Directive()
export class BaseInput {
  control = input<FormControl | null>(null)

  label = input.required<string>()
  name = input.required<string>()
  type = input<string>('text')
  placeholder = input<string>('')
  required = input<boolean>(false)
  readonly = input<boolean>(false)
  helpText = input<string>('')
  options = input<Option[]>([])

  // Create reactive observable streams that respond to control input changes
  private controlChanges$ = toObservable(this.control).pipe(
    switchMap(ctrl => {
      if (!ctrl) {
        return of({ errorMessage: '', hasError: false })
      }

      return merge(ctrl.statusChanges, ctrl.valueChanges).pipe(
        startWith(null),
        map(() => {
          // Calculate error message
          let errorMessage = ''
          if (ctrl.pending && (ctrl.dirty || ctrl.touched)) {
            errorMessage = 'Validating...'
          } else if (ctrl.errors && ctrl.invalid && (ctrl.dirty || ctrl.touched)) {
            errorMessage = this.errorMessages(ctrl)
          }

          // Calculate hasError
          const hasValidationError = ctrl.invalid && (ctrl.dirty || ctrl.touched)
          const hasPendingError = ctrl.pending && (ctrl.dirty || ctrl.touched)
          const hasError = hasValidationError || hasPendingError

          return { errorMessage, hasError }
        })
      )
    })
  )

  // Convert to signals using toSignal
  errorMessage = toSignal(this.controlChanges$.pipe(map(state => state.errorMessage)), { initialValue: '' })
  hasError = toSignal(this.controlChanges$.pipe(map(state => state.hasError)), { initialValue: false })

  errorMessages(control: FormControl): string {
    const errors = control.errors
    if (!errors) return ''

    if (errors['required']) return 'This field is required'
    if (errors['email']) return 'Please enter a valid email address'
    if (errors['minlength']) {
      return `Minimum ${errors['minlength'].requiredLength} characters`
    }
    if (errors['maxlength']) {
      return `Maximum ${errors['maxlength'].requiredLength} characters`
    }

    if (errors['asyncError']) return errors['asyncError'].message || 'Validation failed'

    return 'Invalid field'
  }

  getInputClasses(control: FormControl | null, disabled = false): string {
    const baseClasses =
      'border-beige-500 text-preset-4 placeholder:text-beige-500 hover:border-grey-900 hover:text-grey-900 focus:border-grey-900 focus:text-grey-900 h-12 w-full rounded-xl border px-6 leading-none focus:outline-none transition-colors duration-200'

    const hasError = control ? control.invalid && (control.dirty || control.touched) : false
    const errorClasses = hasError ? 'border-red-500 hover:border-red-500 focus:border-red-500' : ''
    const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : ''

    return `${baseClasses} ${errorClasses} ${disabledClasses}`.trim()
  }
}
