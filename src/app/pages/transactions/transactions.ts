import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Pagination } from '@shared/components/pagination/pagination'

@Component({
  selector: 'transactions',
  imports: [Pagination],
  templateUrl: './transactions.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Transactions {}
