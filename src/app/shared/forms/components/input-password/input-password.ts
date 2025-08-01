import { ChangeDetectionStrategy, Component, forwardRef, signal } from '@angular/core'
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms'
import { EyeOffIcon, EyeIcon } from '@shared/components/icons/icons'
import { BaseInput } from '../base-input/base-input'

@Component({
  selector: 'input-password',
  imports: [EyeOffIcon, EyeIcon],
  templateUrl: './input-password.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-2'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputPassword),
      multi: true
    }
  ]
})
export class InputPassword extends BaseInput implements ControlValueAccessor {
  // Password visibility toggle
  show = signal(false)

  // Internal state
  value = ''
  disabled = false
  touched = false

  // ControlValueAccessor callbacks
  private onChange = (value: string) => {
    void value
  }
  private onTouched = () => {
    // Callback set by registerOnTouched
  }

  // CSS classes using BaseInputUtils for consistency
  get inputClasses(): string {
    return this.getInputClasses(this.control(), this.disabled)
  }

  // ControlValueAccessor implementation
  writeValue(value: string): void {
    this.value = value || ''
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  // Event handlers
  onInput(event: Event): void {
    const target = event.target as HTMLInputElement
    const value = target.value
    this.value = value
    this.onChange(value)
  }

  onBlur(): void {
    this.touched = true
    this.onTouched()
  }

  // Password visibility toggle
  toggleShow(): void {
    this.show.update(show => !show)
  }
}
