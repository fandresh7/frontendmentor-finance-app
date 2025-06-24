import { CurrencyPipe } from '@angular/common'
import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core'

@Component({
  selector: 'category-item',
  imports: [CurrencyPipe],
  templateUrl: './category-item.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoryItem {
  color = input.required<string>()
  title = input.required<string>()
  amount = input.required<number>()
  decimals = input<number>(0)

  currencyFormat = computed(() => `1.${this.decimals()}-${this.decimals()}`)
}
