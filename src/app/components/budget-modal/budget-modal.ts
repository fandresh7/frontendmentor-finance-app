import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

import { InputText, Option } from '@shared/forms'
import { ModalHeader, SimpleCheckIcon } from '@shared/components'
import { Select } from '@shared/forms/components'

interface BudgetModalData {
  title: string
  description: string
  edit?: boolean
}

@Component({
  selector: 'budget-modal',
  imports: [ModalHeader, InputText, Select, ReactiveFormsModule, SimpleCheckIcon],
  templateUrl: './budget-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4'
  }
})
export class BudgetModal {
  dialogRef = inject(DialogRef)
  data: BudgetModalData = inject(DIALOG_DATA)

  fb = inject(FormBuilder)

  form = this.fb.group({
    category: ['', Validators.required],
    amount: ['', Validators.required],
    test: ['', Validators.required]
  })

  closeModal() {
    this.dialogRef.close()
  }

  options: Option[] = [
    { value: 'entertainment', label: 'Entertainment', color: '#277C78' },
    { value: 'bills', label: 'Bills', color: '#F2CDAC' },
    { value: 'groceries', label: 'Groceries', color: '#82C9D7' },
    { value: 'dining-out', label: 'Dining Out', color: '#626070' },
    { value: 'transportation', label: 'Transportation', color: '#C94736' }
  ]

  submit() {
    this.form.markAllAsTouched()
    if (this.form.invalid) return
    console.log(this.form.value)
  }
}
