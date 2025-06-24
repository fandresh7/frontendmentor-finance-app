import { ChangeDetectionStrategy, Component } from '@angular/core'
import { SavingsPots } from '@components/savings-pots/savings-pots'
import { SummaryCard } from '@components/summary-card/summary-card'
import { TransactionsList } from '@components/transactions-list/transactions-list'

@Component({
  selector: 'home',
  imports: [SummaryCard, SavingsPots, TransactionsList],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {}
