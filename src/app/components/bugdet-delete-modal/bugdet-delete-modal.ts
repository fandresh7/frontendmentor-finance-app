import { DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'

import { ModalHeader } from '@shared/components'

@Component({
  selector: 'bugdet-delete-modal',
  imports: [ModalHeader],
  templateUrl: './bugdet-delete-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4'
  }
})
export class BugdetDeleteModal {
  dialogRef = inject(DialogRef)

  closeModal() {
    this.dialogRef.close()
  }
}
