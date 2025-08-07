import { DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { ModalHeader } from '@shared/components'

@Component({
  selector: 'pot-delete-modal',
  imports: [ModalHeader],
  templateUrl: './pot-delete-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4'
  }
})
export class PotDeleteModal {
  dialogRef = inject(DialogRef)

  closeModal() {
    this.dialogRef.close()
  }
}
