import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { InputText } from '@shared/forms/components'
import { ModalHeader } from '../modal-header/modal-header'
import { SubmitButton } from '../submit-button/submit-button'

@Component({
  selector: 'budget-modal',
  imports: [ModalHeader, InputText, SubmitButton],
  templateUrl: './budget-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BudgetModal {
  dialogRef = inject(DialogRef)
  data: { title: string } = inject(DIALOG_DATA)

  closeModal() {
    this.dialogRef.close()
  }
}
