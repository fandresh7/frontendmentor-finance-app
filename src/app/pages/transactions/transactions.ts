import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'transactions',
  imports: [],
  templateUrl: './transactions.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Transactions {}
