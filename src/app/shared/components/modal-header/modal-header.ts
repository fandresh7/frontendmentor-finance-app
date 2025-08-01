import { ChangeDetectionStrategy, Component, input, output } from '@angular/core'
import { CloseIcon } from '../icons/icons'

@Component({
  selector: 'modal-header',
  imports: [CloseIcon],
  templateUrl: './modal-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex items-start justify-between gap-4'
  }
})
export class ModalHeader {
  title = input.required<string>()
  closeModal = output<void>()

  onClose() {
    this.closeModal.emit()
  }
}
