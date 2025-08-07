import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { CollapseSidebar } from '@shared/services'
import { HomeIcon, PotsIcon, TransactionsIcon, BudgetsIcon, RecurrentBillsIcon, BackIcon } from '../icons/icons'
import { SidebarItem } from '../sidebar-item/sidebar-item'

@Component({
  selector: 'sidebar',
  imports: [HomeIcon, PotsIcon, TransactionsIcon, BudgetsIcon, RecurrentBillsIcon, SidebarItem, BackIcon],
  templateUrl: './sidebar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'bg-grey-900 flex flex-col gap-16 md:py-8 w-full md:h-dvh fixed bottom-0 md:static overflow-hidden rounded-t-2xl md:rounded-t-none md:rounded-r-2xl'
  }
})
export class Sidebar {
  collapseSidebar = inject(CollapseSidebar)

  toggle() {
    this.collapseSidebar.toggle()
  }
}
