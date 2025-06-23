import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Sidebar } from '@shared/components/sidebar/sidebar'
import { CollapseSidebar } from '@shared/services/collapse-sidebar'

@Component({
  selector: 'dashboard-layout',
  imports: [RouterOutlet, Sidebar],
  templateUrl: './dashboard-layout.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class]': "'h-dvh w-dvw grid overflow-hidden transition-[grid-template-columns] duration-500 grid-cols-1 ' + (collapsed() ? '' : 'md:grid-cols-[260px_1fr]')"
  }
})
export class DashboardLayout {
  collapsedSidebar = inject(CollapseSidebar)
  collapsed = computed(() => this.collapsedSidebar.collapsed())
}
