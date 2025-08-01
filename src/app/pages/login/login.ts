import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'
import { RouterLink } from '@angular/router'
import { Card } from '@shared/components/card/card'
import { InputPassword } from '@shared/forms/components/input-password/input-password'
import { InputText } from '@shared/forms/components/input-text/input-text'

@Component({
  selector: 'login',
  imports: [Card, RouterLink, InputPassword, InputText, ReactiveFormsModule],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full block'
  }
})
export class Login {
  private fb = inject(FormBuilder)

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  })

  onSubmit(): void {
    console.log('Form submitted:', this.loginForm.value)
    this.loginForm.markAllAsTouched()
  }
}
