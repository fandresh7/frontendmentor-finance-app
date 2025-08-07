import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { Card } from '@shared/components'
import { InputPassword, InputText } from '@shared/forms'

@Component({
  selector: 'signup',
  imports: [Card, RouterLink, InputPassword, InputText, ReactiveFormsModule],
  templateUrl: './signup.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full block'
  }
})
export class Signup {
  private fb = inject(FormBuilder)

  signupForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })

  onSubmit(): void {
    console.log('Form submitted:', this.signupForm.value)
    this.signupForm.markAllAsTouched()
  }
}
