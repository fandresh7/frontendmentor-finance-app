import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'submit-button',
  imports: [],
  templateUrl: './submit-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitButton {
  text = input.required<string>()
  invalid = input.required<boolean>()
}
