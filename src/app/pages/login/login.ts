import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterLink } from '@angular/router'
import { Card } from '@shared/components/card/card'
import { EyeIcon, EyeOffIcon } from '@shared/components/icons/icons'

@Component({
  selector: 'login',
  imports: [Card, EyeIcon, EyeOffIcon, RouterLink],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full block'
  }
})
export class Login {}
