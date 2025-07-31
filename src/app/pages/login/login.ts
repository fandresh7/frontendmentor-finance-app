import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Card } from '@shared/components/card/card'
import { InputPassword } from '@shared/forms/components/input-password/input-password'
import { InputText } from '@shared/forms/components/input-text/input-text'

@Component({
  selector: 'login',
  imports: [Card, RouterLink, InputPassword, InputText],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full block'
  }
})
export class Login {}
