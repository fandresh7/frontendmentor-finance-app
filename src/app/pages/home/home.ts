import { ChangeDetectionStrategy, Component } from '@angular/core'
import { SavingsPots } from '@components/savings-pots/savings-pots'
import { SummaryCard } from '@components/summary-card/summary-card'
import { TransactionsList } from '@components/transactions-list/transactions-list'
import { BugdetsSummaryCard } from '@components/bugdets-summary-card/bugdets-summary-card'
import { RecurringBillsSummaryCard } from '@components/recurring-bills-summary-card/recurring-bills-summary-card'

@Component({
  selector: 'home',
  imports: [SummaryCard, SavingsPots, TransactionsList, BugdetsSummaryCard, RecurringBillsSummaryCard],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {}
