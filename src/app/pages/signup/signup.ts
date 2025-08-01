import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { Card } from '@shared/components/card/card'
import { RouterLink } from '@angular/router'
import { InputPassword } from '@shared/forms/components/input-password/input-password'
import { InputText } from '@shared/forms/components/input-text/input-text'

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
