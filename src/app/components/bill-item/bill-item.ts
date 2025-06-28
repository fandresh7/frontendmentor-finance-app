import { CurrencyPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'bill-item',
  imports: [CurrencyPipe],
  templateUrl: './bill-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillItem {
  title = input.required<string>()
  amount = input.required<number>()
  color = input.required<string>()
}
