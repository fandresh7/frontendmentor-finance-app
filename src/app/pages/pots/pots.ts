import { ChangeDetectionStrategy, Component } from '@angular/core'
import { PotCard } from '@components/pot-card/pot-card'

@Component({
  selector: 'pots',
  imports: [PotCard],
  templateUrl: './pots.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Pots {}
