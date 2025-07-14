import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Card } from '@shared/components/card/card'
import { EyeIcon, EyeOffIcon } from '@shared/components/icons/icons'

@Component({
  selector: 'login',
  imports: [Card, EyeIcon, EyeOffIcon],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Login {}
