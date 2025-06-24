import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Card } from '@shared/components/card/card'
import { CardHeader } from '@shared/components/card-header/card-header'
import { TransactionItem } from '../transaction-item/transaction-item'

@Component({
  selector: 'transactions-list',
  imports: [Card, CardHeader, TransactionItem],
  templateUrl: './transactions-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsList {}
