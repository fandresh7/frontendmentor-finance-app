import { ChangeDetectionStrategy, Component } from '@angular/core'
import { SummaryCard } from '@components/summary-card/summary-card'

@Component({
  selector: 'home',
  imports: [SummaryCard],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {}
