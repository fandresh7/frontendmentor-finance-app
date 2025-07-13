import { CurrencyPipe, DatePipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

@Component({
  selector: 'tr[transaction-row]',
  imports: [CurrencyPipe, DatePipe],
  templateUrl: './transaction-row.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionRow {
  avatar = input.required<string>()
  name = input.required<string>()
  amount = input.required<number>()
  date = input.required<string>()
  category = input.required<string>()

  color = computed(() => (this.amount() > 0 ? 'text-green' : 'text-grey-900'))
  sign = computed(() => (this.amount() > 0 ? '+' : ''))
}
