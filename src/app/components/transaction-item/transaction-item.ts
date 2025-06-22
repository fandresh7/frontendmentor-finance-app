import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'transaction-item',
  imports: [],
  templateUrl: './transaction-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionItem {}
