import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Card } from '@shared/components/card/card'
import { CardHeader } from '@shared/components/card-header/card-header'
import { BillItem } from '../bill-item/bill-item'

@Component({
  selector: 'recurring-bills-summary-card',
  imports: [Card, CardHeader, BillItem],
  templateUrl: './recurring-bills-summary-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecurringBillsSummaryCard {}
