import { ChangeDetectionStrategy, Component, signal } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'

import { SearchIcon, ChevronDownIcon, FilterIcon, DownloadIcon } from '@shared/components/icons/icons'

@Component({
  selector: 'transactions-filters',
  imports: [SearchIcon, ChevronDownIcon, OverlayModule, FilterIcon, DownloadIcon],
  templateUrl: './transactions-filters.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsFilters {
  isSortByOpen = signal<boolean>(false)
  isCategoryOpen = signal<boolean>(false)

  toggleSortBy() {
    this.isSortByOpen.set(!this.isSortByOpen())
  }

  toggleCategory() {
    this.isCategoryOpen.set(!this.isCategoryOpen())
  }

  closeSortBy() {
    this.isSortByOpen.set(false)
  }

  closeCategory() {
    this.isCategoryOpen.set(false)
  }
}
