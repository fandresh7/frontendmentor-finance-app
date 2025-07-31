import { ChangeDetectionStrategy, Component } from '@angular/core'

@Component({
  selector: 'base-input',
  imports: [],
  templateUrl: './base-input.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseInput {}
