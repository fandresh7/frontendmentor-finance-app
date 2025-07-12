import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CurrencyPipe } from '@angular/common'

import { RecurrentBillsIcon2 } from '@shared/components/icons/icons'
import { Card } from '@shared/components/card/card'

@Component({
  selector: 'recurring-bills',
  imports: [RecurrentBillsIcon2, Card, CurrencyPipe],
  templateUrl: './recurring-bills.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecurringBills {}
