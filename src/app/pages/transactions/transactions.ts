import { ChangeDetectionStrategy, Component } from '@angular/core'

import { TransactionRow } from '@components/transaction-row/transaction-row'
import { Pagination } from '@shared/components/pagination/pagination'
import { Card } from '@shared/components/card/card'

@Component({
  selector: 'transactions',
  imports: [Pagination, Card, TransactionRow],
  templateUrl: './transactions.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Transactions {
  transactions = [
    {
      avatar: './images/avatars/emma-richardson.jpg',
      name: 'Emma Richardson',
      amount: 75.5,
      category: 'Personal Care',
      date: '2024-08-19T14:23:11Z'
    },
    {
      avatar: './images/avatars/savory-bites-bistro.jpg',
      name: 'Savory Bites Bistro',
      amount: -55.5,
      category: 'Food',
      date: '2024-08-19T20:23:11Z'
    },
    {
      avatar: './images/avatars/daniel-carter.jpg',
      name: 'Daniel Carter',
      amount: -42.3,
      category: 'Personal Care',
      date: '2024-08-18T09:45:32Z'
    },
    {
      avatar: './images/avatars/sun-park.jpg',
      name: 'Sun Park',
      amount: 120,
      category: 'Food',
      date: '2024-08-17T16:12:05Z'
    },
    {
      avatar: './images/avatars/urban-services-hub.jpg',
      name: 'Urban Services Hub',
      amount: -65,
      category: 'Utilities',
      date: '2024-08-17T21:08:09Z'
    }
  ]
}
