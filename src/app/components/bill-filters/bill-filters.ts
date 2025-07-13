import { ChangeDetectionStrategy, Component, input, model, signal } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { FormsModule } from '@angular/forms'

import { SearchIcon, ChevronDownIcon, DownloadIcon } from '@shared/components/icons/icons'

@Component({
  selector: 'bill-filters',
  imports: [OverlayModule, FormsModule, SearchIcon, ChevronDownIcon, DownloadIcon],
  templateUrl: './bill-filters.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BillFilters {
  sortOptions = input<string[]>([])

  search = model<string>('')
  selectedSortOption = model<string | null>(null)

  isSortByOpen = signal<boolean>(false)

  toggleSortBy() {
    this.isSortByOpen.set(!this.isSortByOpen())
  }

  closeSortBy() {
    this.isSortByOpen.set(false)
  }

  selectSortOption(option: string) {
    this.selectedSortOption.set(option)
    this.closeSortBy()
  }
}
