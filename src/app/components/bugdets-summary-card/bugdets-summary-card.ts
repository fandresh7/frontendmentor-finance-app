import { ChangeDetectionStrategy, Component } from '@angular/core'

import { CategoryItem } from '@components/category-item/category-item'
import { BudgetsChart } from '../budgets-chart/budgets-chart'
import { Card, CardHeader } from '@shared/components'

@Component({
  selector: 'bugdets-summary-card',
  imports: [CardHeader, Card, CategoryItem, BudgetsChart],
  templateUrl: './bugdets-summary-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BugdetsSummaryCard {}
