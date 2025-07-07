import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'

import { Card } from '@shared/components/card/card'
import { EllipsisIcon } from '@shared/components/icons/icons'
import { ProgressBar } from '@shared/components/progress-bar/progress-bar'
import { CardHeader } from '@shared/components/card-header/card-header'
import { CategoryItem } from '../category-item/category-item'
import { TransactionItem } from '../transaction-item/transaction-item'

@Component({
  selector: 'budget-summary-card',
  imports: [Card, EllipsisIcon, ProgressBar, CategoryItem, CardHeader, TransactionItem, OverlayModule],
  templateUrl: './budget-summary-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetSummaryCard {
  isOpen = signal(false)

  toggleDropdown() {
    this.isOpen.set(!this.isOpen())
  }

  closeDropdown() {
    this.isOpen.set(false)
  }

  openModal() {
    console.log('openModal')
  }
}
