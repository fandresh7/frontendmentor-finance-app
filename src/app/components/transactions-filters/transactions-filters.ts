import { ChangeDetectionStrategy, Component, input, model, signal } from '@angular/core'
import { OverlayModule } from '@angular/cdk/overlay'
import { FormsModule } from '@angular/forms'

import { SearchIcon, ChevronDownIcon, FilterIcon, DownloadIcon } from '@shared/components/icons/icons'

@Component({
  selector: 'transactions-filters',
  imports: [SearchIcon, ChevronDownIcon, FilterIcon, DownloadIcon, OverlayModule, FormsModule],
  templateUrl: './transactions-filters.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsFilters {
  categories = input<string[]>([])
  sortOptions = input<string[]>([])

  search = model<string>('')
  selectedCategory = model<string | null>(null)
  selectedSortOption = model<string | null>(null)

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

  selectCategory(category: string) {
    this.selectedCategory.set(category)
    this.closeCategory()
  }

  selectSortOption(option: string) {
    this.selectedSortOption.set(option)
    this.closeSortBy()
  }
}
