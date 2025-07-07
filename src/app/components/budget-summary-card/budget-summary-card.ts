import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Card } from '@shared/components/card/card'
import { EllipsisIcon } from '@shared/components/icons/icons'
import { ProgressBar } from '@shared/components/progress-bar/progress-bar'
import { CardHeader } from '@shared/components/card-header/card-header'
import { CategoryItem } from '../category-item/category-item'
import { TransactionItem } from '../transaction-item/transaction-item'

@Component({
  selector: 'budget-summary-card',
  imports: [Card, EllipsisIcon, ProgressBar, CategoryItem, CardHeader, TransactionItem],
  templateUrl: './budget-summary-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetSummaryCard {}
