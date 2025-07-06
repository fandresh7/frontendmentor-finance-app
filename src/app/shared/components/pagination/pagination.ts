import { ChangeDetectionStrategy, Component, computed, input, model } from '@angular/core'
import { ChevronRightIcon } from '../icons/icons'

@Component({
  selector: 'pagination',
  imports: [ChevronRightIcon],
  templateUrl: './pagination.html',
  styleUrl: './pagination.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'flex items-center justify-between gap-4 text-preset-4'
  }
})
export class Pagination {
  total = input.required<number>()
  currentPage = model.required<number>()

  pages = computed(() => Math.ceil(this.total() / 10))

  hasPrev = computed(() => this.currentPage() > 1)
  hasNext = computed(() => this.currentPage() < this.pages())

  pagesRange = computed(() => {
    const totalPages = this.pages()
    const currentPage = this.currentPage()

    // Si hay pocas páginas, mostrarlas todas (3 o menos)
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }

    // Si la página actual está al inicio
    if (currentPage <= 2) {
      return [1, 2, '...', totalPages]
    }

    // Si la página actual está al final
    if (currentPage >= totalPages - 1) {
      return [1, '...', totalPages - 1, totalPages]
    }

    // Caso general - máximo 5 elementos
    return [1, '...', currentPage, '...', totalPages]
  })

  isNumber(page: number | string): page is number {
    return typeof page === 'number'
  }
}
