import { ChangeDetectionStrategy, Component, input } from '@angular/core'
import { RouterLink } from '@angular/router'
import { ChevronRightIcon } from '../icons/icons'

@Component({
  selector: 'card-header',
  imports: [RouterLink, ChevronRightIcon],
  templateUrl: './card-header.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardHeader {
  title = input.required<string>()
  link = input.required<string>()
  linkText = input.required<string>()
}
