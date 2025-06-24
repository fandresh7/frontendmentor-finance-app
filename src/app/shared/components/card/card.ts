import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'rounded-xl bg-white p-4 md:p-6 flex flex-col gap-4'
  }
})
export class Card {}
