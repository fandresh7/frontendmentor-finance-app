import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { Dialog } from '@angular/cdk/dialog'

import { BudgetModal } from '@components/budget-modal/budget-modal'
import { BugdetDeleteModal } from '@components/bugdet-delete-modal/bugdet-delete-modal'
import { CategoryItem } from '@components/category-item/category-item'
import { TransactionItem } from '@components/transaction-item/transaction-item'
import { Card, EllipsisIcon, ProgressBar, CardHeader } from '@shared/components'

@Component({
  selector: 'budget-summary-card',
  imports: [Card, EllipsisIcon, ProgressBar, CategoryItem, CardHeader, TransactionItem, OverlayModule],
  templateUrl: './budget-summary-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetSummaryCard {
  isOpen = signal(false)

  dialog = inject(Dialog)

  toggleDropdown() {
    this.isOpen.set(!this.isOpen())
  }

  closeDropdown() {
    this.isOpen.set(false)
  }

  openEditModal() {
    this.closeDropdown()

    this.dialog.open(BudgetModal, {
      panelClass: 'modal',
      data: {
        title: 'Edit Budget',
        description: 'As your budgets change, feel free to update your spending limits.',
        edit: true
      }
    })
  }

  openDeleteModal() {
    this.closeDropdown()

    this.dialog.open(BugdetDeleteModal, {
      panelClass: 'modal'
    })
  }
}
