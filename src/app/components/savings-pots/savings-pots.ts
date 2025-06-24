import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CurrencyPipe } from '@angular/common'

import { Card } from '@shared/components/card/card'
import { CardHeader } from '@shared/components/card-header/card-header'
import { PotIcon } from '@shared/components/icons/icons'
import { CategoryItem } from '../category-item/category-item'

@Component({
  selector: 'savings-pots',
  imports: [Card, CardHeader, CurrencyPipe, PotIcon, CategoryItem],
  templateUrl: './savings-pots.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SavingsPots {}
