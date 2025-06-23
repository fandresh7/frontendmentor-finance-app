import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core'
import { Router, RouterLink, RouterLinkActive } from '@angular/router'

@Component({
  selector: 'sidebar-item',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './sidebar-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'grow'
  }
})
export class SidebarItem {
  router = inject(Router)

  label = input.required<string>()
  link = input.required<string>()
  exactMatch = input<boolean>(false)
}
