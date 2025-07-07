import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Card } from '@shared/components/card/card'
import { BudgetsChart } from '@components/budgets-chart/budgets-chart'
import { CategorySummaryItem } from '@components/category-summary-item/category-summary-item'
import { BudgetSummaryCard } from '@components/budget-summary-card/budget-summary-card'

@Component({
  selector: 'budgets',
  imports: [Card, BudgetsChart, CategorySummaryItem, BudgetSummaryCard],
  templateUrl: './budgets.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Budgets {}
