import { ChangeDetectionStrategy, Component, input } from '@angular/core'

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'rounded-xl p-4 md:p-6 flex flex-col gap-4 w-full',
    '[class]': 'background()'
  }
})
export class Card {
  background = input<string>('bg-white')
}
