import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'progress-bar',
  imports: [],
  templateUrl: './progress-bar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-beige-100 h-8 w-full rounded p-1'
  }
})
export class ProgressBar {
  color = input.required<string>()
  percentage = input.required<number>()
}
