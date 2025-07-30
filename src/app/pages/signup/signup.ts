import { ChangeDetectionStrategy, Component } from '@angular/core'
import { EyeIcon, EyeOffIcon } from '@shared/components/icons/icons'
import { Card } from '@shared/components/card/card'
import { RouterLink } from '@angular/router'

@Component({
  selector: 'signup',
  imports: [EyeIcon, EyeOffIcon, Card, RouterLink],
  templateUrl: './signup.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'w-full block'
  }
})
export class Signup {}
