import { CurrencyPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'category-summary-item',
  imports: [CurrencyPipe],
  templateUrl: './category-summary-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategorySummaryItem {
  color = input.required<string>()
  title = input.required<string>()
  current = input.required<number>()
  total = input.required<number>()
}
