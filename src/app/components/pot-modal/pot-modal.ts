import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog'
import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms'

import { ModalHeader, SimpleCheckIcon } from '@shared/components'
import { InputText, Option, Select } from '@shared/forms'

interface PotModalData {
  title: string
  description: string
  edit?: boolean
}

@Component({
  selector: 'pot-modal',
  imports: [ModalHeader, InputText, Select, SimpleCheckIcon, ReactiveFormsModule],
  templateUrl: './pot-modal.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex flex-col gap-4'
  }
})
export class PotModal {
  dialogRef = inject(DialogRef)
  data: PotModalData = inject(DIALOG_DATA)

  fb = inject(FormBuilder)

  form = this.fb.group({
    pot_name: ['', Validators.required],
    target: ['', Validators.required],
    theme: ['', Validators.required]
  })

  closeModal() {
    this.dialogRef.close()
  }

  submit() {
    this.form.markAllAsTouched()
    if (this.form.invalid) return
    console.log(this.form.value)
  }

  options: Option[] = [
    { value: 'beige', label: 'Beige', color: '#277C78' },
    { value: 'blue', label: 'Blue', color: '#F2CDAC' },
    { value: 'green', label: 'Green', color: '#82C9D7' },
    { value: 'orange', label: 'Orange', color: '#626070' },
    { value: 'red', label: 'Red', color: '#C94736' }
  ]
}
