import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Card } from '@shared/components/card/card'
import { InputPassword } from '@shared/components/forms/input-password/input-password'
import { InputText } from '@shared/components/forms/input-text/input-text'

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
