import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Dialog } from '@angular/cdk/dialog'

import { Card } from '@shared/components'
import { BudgetsChart } from '@components/budgets-chart/budgets-chart'
import { CategorySummaryItem } from '@components/category-summary-item/category-summary-item'
import { BudgetSummaryCard } from '@components/budget-summary-card/budget-summary-card'
import { BudgetModal } from '@components/budget-modal/budget-modal'

@Component({
  selector: 'budgets',
  imports: [Card, BudgetsChart, CategorySummaryItem, BudgetSummaryCard],
  templateUrl: './budgets.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Budgets {
  dialog = inject(Dialog)

  openDialog() {
    this.dialog.open(BudgetModal, {
      panelClass: 'modal',
      data: {
        title: 'Add New Budget',
        description: 'Choose a category to set a spending budget. These categories can help you monitor spending.'
      }
    })
  }
}
