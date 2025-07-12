import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-beige-100 w-full rounded',
    '[class.h-2]': 'isTiny()',
    '[class.h-8]': '!isTiny()',
    '[class.p-0]': 'isTiny()',
    '[class.p-1]': '!isTiny()'
  }
})
export class ProgressBar {
  color = input.required<string>()
  percentage = input.required<number>()
  isTiny = input<boolean>(false)
}
