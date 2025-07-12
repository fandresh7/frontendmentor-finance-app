import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { CurrencyPipe } from '@angular/common'

import { Card } from '@shared/components/card/card'
import { EllipsisIcon } from '@shared/components/icons/icons'
import { ProgressBar } from '@shared/components/progress-bar/progress-bar'

@Component({
  selector: 'pot-card',
  imports: [OverlayModule, Card, EllipsisIcon, CurrencyPipe, ProgressBar],
  templateUrl: './pot-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PotCard {
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
