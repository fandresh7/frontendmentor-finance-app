import { ChangeDetectionStrategy, Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

@Component({
  selector: 'dashboard-layout',
  imports: [RouterOutlet],
  templateUrl: './dashboard-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardLayout {}
