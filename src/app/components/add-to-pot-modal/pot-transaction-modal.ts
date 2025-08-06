import { DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms'

import { ProgressBarWithTarget } from '@shared/components/progress-bar-with-target/progress-bar-with-target'
import { ModalHeader } from '@shared/components/modal-header/modal-header'
import { InputText } from '@shared/forms/components'

@Component({
  selector: 'pot-transaction-modal',
  imports: [ModalHeader, InputText, ReactiveFormsModule, ProgressBarWithTarget],
  templateUrl: './pot-transaction-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4'
  }
})
export class PotTransactionModal {
  dialogRef = inject(DialogRef)

  fb = inject(FormBuilder)

  form = this.fb.group({
    withdraw_amount: ['', Validators.required]
  })

  closeModal() {
    this.dialogRef.close()
  }

  submit() {
    this.form.markAllAsTouched()
    if (this.form.invalid) return
    console.log(this.form.value)
  }
}
