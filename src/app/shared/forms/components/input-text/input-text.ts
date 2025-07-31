import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'input-text',
  imports: [],
  templateUrl: './input-text.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-2'
  }
})
export class InputText {
  label = input.required<string>()
  name = input.required<string>()
  type = input<string>('text')
}
