import { Dialog } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { PotCard } from '@components/pot-card/pot-card'
import { PotModal } from '@components/pot-modal/pot-modal'

@Component({
  selector: 'pots',
  imports: [PotCard],
  templateUrl: './pots.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pots {
  dialog = inject(Dialog)

  openModal() {
    this.dialog.open(PotModal, {
      panelClass: 'modal',
      data: {
        title: 'Add New Pot',
        description: 'Create a pot to set savings targets. These can help keep you on track as you save for special purchases.'
      }
    })
  }
}
