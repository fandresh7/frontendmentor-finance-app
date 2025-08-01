import { DialogRef, DIALOG_DATA } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { InputText } from '@shared/forms/components'
import { ModalHeader } from '@shared/components/modal-header/modal-header'
import { Select } from '@shared/forms/components/select/select'
import { Option } from '@shared/forms/interfaces/options'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

interface BudgetModalData {
  title: string
  description: string
  edit?: boolean
}

@Component({
  selector: 'budget-modal',
  imports: [ModalHeader, InputText, Select, ReactiveFormsModule],
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

  constructor() {
    this.form.valueChanges.subscribe(value => {
      console.log(value)
    })
  }

  closeModal() {
    this.dialogRef.close()
  }

  options: Option[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
    { value: '3', label: 'Option 3' }
  ]

  submit() {
    console.log(this.form.value)
  }
}
