import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Card } from '@shared/components/card/card'
import { RouterLink } from '@angular/router'
import { InputPassword } from '@shared/components/forms/input-password/input-password'
import { InputText } from '@shared/components/forms/input-text/input-text'

@Component({
  selector: 'signup',
  imports: [Card, RouterLink, InputPassword, InputText],
  templateUrl: './signup.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full block'
  }
})
export class Signup {}
