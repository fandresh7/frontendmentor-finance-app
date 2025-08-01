import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { InputText } from '@shared/forms/components'
import { ModalHeader } from '@shared/components/modal-header/modal-header'
import { SubmitButton } from '@shared/components/submit-button/submit-button'

interface BudgetModalData {
  title: string
  description: string
  edit?: boolean
}

@Component({
  selector: 'budget-modal',
  imports: [ModalHeader, InputText, SubmitButton],
  templateUrl: './budget-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4'
  }
})
export class BudgetModal {
  dialogRef = inject(DialogRef)
  data: BudgetModalData = inject(DIALOG_DATA)

  closeModal() {
    this.dialogRef.close()
  }
}
