import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { Dialog } from '@angular/cdk/dialog'

import { Card } from '@shared/components/card/card'
import { BudgetsChart } from '@components/budgets-chart/budgets-chart'
import { CategorySummaryItem } from '@components/category-summary-item/category-summary-item'
import { BudgetSummaryCard } from '@components/budget-summary-card/budget-summary-card'
import { BudgetModal } from '@shared/components/budget-modal/budget-modal'

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
        title: 'Add New Budget'
      }
    })
  }
}
