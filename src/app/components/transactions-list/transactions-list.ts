import { ChangeDetectionStrategy, Component } from '@angular/core'

import { TransactionItem } from '../transaction-item/transaction-item'
import { Card, CardHeader } from '@shared/components'

@Component({
  selector: 'transactions-list',
  imports: [Card, CardHeader, TransactionItem],
  templateUrl: './transactions-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsList {}
