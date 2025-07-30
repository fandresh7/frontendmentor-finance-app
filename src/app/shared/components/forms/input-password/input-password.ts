import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core'
import { EyeOffIcon, EyeIcon } from '@shared/components/icons/icons'

@Component({
  selector: 'input-password',
  imports: [EyeOffIcon, EyeIcon],
  templateUrl: './input-password.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-2'
  }
})
export class InputPassword {
  label = input.required<string>()
  name = input.required<string>()
  helpText = input<string>()

  show = signal(false)

  toggleShow() {
    this.show.update(show => !show)
  }
}
