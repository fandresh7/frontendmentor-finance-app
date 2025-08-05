import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { CurrencyPipe } from '@angular/common'

import { Card } from '@shared/components/card/card'
import { EllipsisIcon } from '@shared/components/icons/icons'
import { ProgressBar } from '@shared/components/progress-bar/progress-bar'
import { Dialog } from '@angular/cdk/dialog'
import { PotDeleteModal } from '@components/pot-delete-modal/pot-delete-modal'
import { PotModal } from '@components/pot-modal/pot-modal'

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
}
