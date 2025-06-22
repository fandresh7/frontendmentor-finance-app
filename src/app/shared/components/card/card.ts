import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'card',
  imports: [],
  templateUrl: './card.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Card {}
