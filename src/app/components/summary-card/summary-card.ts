import { CurrencyPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'summary-card',
  imports: [CurrencyPipe],
  templateUrl: './summary-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummaryCard {
  balance = input.required<number>()
  title = input.required<string>()
  theme = input<string>('light')
}
