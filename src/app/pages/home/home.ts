import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'home',
  imports: [],
  templateUrl: './home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Home {}
