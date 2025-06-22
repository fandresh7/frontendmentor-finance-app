import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'transactions-list',
  imports: [],
  templateUrl: './transactions-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsList {}
