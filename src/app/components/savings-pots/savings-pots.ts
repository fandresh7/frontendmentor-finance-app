import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CurrencyPipe } from '@angular/common'

import { CategoryItem } from '../category-item/category-item'
import { Card, CardHeader, PotIcon } from '@shared/components'

@Component({
  selector: 'savings-pots',
  imports: [Card, CardHeader, CurrencyPipe, PotIcon, CategoryItem],
  templateUrl: './savings-pots.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SavingsPots {}
