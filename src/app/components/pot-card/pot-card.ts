import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { CurrencyPipe } from '@angular/common'
import { Dialog } from '@angular/cdk/dialog'

import { PotTransactionModal } from '@components/add-to-pot-modal/pot-transaction-modal'
import { PotDeleteModal } from '@components/pot-delete-modal/pot-delete-modal'
import { PotModal } from '@components/pot-modal/pot-modal'
import { Card, EllipsisIcon, ProgressBar } from '@shared/components'

@Component({
  selector: 'pot-card',
  imports: [OverlayModule, Card, EllipsisIcon, CurrencyPipe, ProgressBar],
  templateUrl: './pot-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PotCard {
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

    this.dialog.open(PotModal, {
      panelClass: 'modal',
      data: {
        title: 'Edit Pot',
        description: 'If your saving targets change, feel free to update your pots.',
        edit: true
      }
    })
  }

  openDeleteModal() {
    this.closeDropdown()

    this.dialog.open(PotDeleteModal, {
      panelClass: 'modal'
    })
  }

  OpenAddToPotModal() {
    this.closeDropdown()

    this.dialog.open(PotTransactionModal, {
      panelClass: 'modal'
    })
  }
}
