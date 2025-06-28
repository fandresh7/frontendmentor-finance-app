import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CategoryItem } from '@components/category-item/category-item'
import { CardHeader } from '@shared/components/card-header/card-header'
import { Card } from '@shared/components/card/card'
import { BudgetsChart } from '../budgets-chart/budgets-chart'

@Component({
  selector: 'bugdets-summary-card',
  imports: [CardHeader, Card, CategoryItem, BudgetsChart],
  templateUrl: './bugdets-summary-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BugdetsSummaryCard {}
