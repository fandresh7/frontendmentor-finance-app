import { ChangeDetectionStrategy, Component } from '@angular/core'
import { Card } from '@shared/components/card/card'
import { BudgetsChart } from '@components/budgets-chart/budgets-chart'
import { CategorySummaryItem } from '@components/category-summary-item/category-summary-item'

@Component({
  selector: 'budgets',
  imports: [Card, BudgetsChart, CategorySummaryItem],
  templateUrl: './budgets.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Budgets {}
