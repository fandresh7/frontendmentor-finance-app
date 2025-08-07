import { ChangeDetectionStrategy, Component } from '@angular/core'

import { BillItem } from '../bill-item/bill-item'
import { Card, CardHeader } from '@shared/components'

@Component({
  selector: 'recurring-bills-summary-card',
  imports: [Card, CardHeader, BillItem],
  templateUrl: './recurring-bills-summary-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecurringBillsSummaryCard {}
