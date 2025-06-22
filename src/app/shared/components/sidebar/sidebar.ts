import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Sidebar {}
