import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'submit-button',
  imports: [],
  templateUrl: './submit-button.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    type: 'submit',
    role: 'button',
    '[attr.form]': 'formId()',
    '[attr.disabled]': 'invalid()',
    '[class]':
      'invalid() ? "w-full text-preset-4-bold bg-grey-500 cursor-not-allowed rounded-xl p-4 text-white transition-colors duration-300 text-center" : "w-full text-preset-4-bold bg-grey-900 hover:bg-beige-500 cursor-pointer rounded-xl p-4 text-white transition-colors duration-300 text-center"'
  }
})
export class SubmitButton {
  text = input.required<string>()
  invalid = input.required<boolean>()
  formId = input.required<string>()
}
