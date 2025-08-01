import { AbstractControl, ValidationErrors } from '@angular/forms'
import { Observable, of } from 'rxjs'
import { delay, map } from 'rxjs/operators'

export function validateNameAsync(control: AbstractControl): Observable<ValidationErrors | null> {
  if (!control.value || control.value.length < 2) {
    return of(null) // Let sync validators handle empty/short values
  }

  // Simulate server call with 2 second delay
  return of(control.value).pipe(
    delay(1000),
    map((name: string) => {
      // Simulate different scenarios based on name
      if (name.toLowerCase() === 'admin') {
        return { asyncError: { message: 'Name "admin" is reserved' } }
      }
      if (name.toLowerCase() === 'john') {
        return { asyncError: { message: 'This name is already taken' } }
      }
      if (name.toLowerCase() === 'error') {
        return { asyncError: { message: 'Server connection failed' } }
      }
      // Valid name
      return null
    })
  )
}
