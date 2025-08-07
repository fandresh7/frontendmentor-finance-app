import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { CurrencyPipe } from '@angular/common'

import { CheckIcon, WarningIcon } from '@shared/components'

@Component({
  selector: 'tr[bill-row]',
  imports: [CurrencyPipe, CheckIcon, WarningIcon],
  templateUrl: './bill-row.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillRow {
  image = input.required<string>()
  title = input.required<string>()
  dueDate = input.required<string>()
  amount = input.required<number>()
  paid = input.required<boolean>()
  toPaySoon = input.required<boolean>()
}
