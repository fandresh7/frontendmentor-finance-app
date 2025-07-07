import { CurrencyPipe, DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

@Component({
  selector: 'transaction-item',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transaction-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionItem {
  avatar = input<string>()
  name = input.required<string>()
  amount = input.required<number>()
  date = input.required<string>()

  color = computed(() => (this.amount() > 0 ? 'text-green' : 'text-grey-900'))
  sign = computed(() => (this.amount() > 0 ? '+' : ''))
}
