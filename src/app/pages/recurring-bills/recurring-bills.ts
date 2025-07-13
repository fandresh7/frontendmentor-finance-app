import { ChangeDetectionStrategy, Component } from '@angular/core'
import { CurrencyPipe } from '@angular/common'

import { RecurrentBillsIcon2 } from '@shared/components/icons/icons'
import { Card } from '@shared/components/card/card'
import { BillFilters } from '@components/bill-filters/bill-filters'
import { BillRow } from '@components/bill-row/bill-row'
import { Pagination } from '@shared/components/pagination/pagination'

@Component({
  selector: 'recurring-bills',
  imports: [RecurrentBillsIcon2, Card, CurrencyPipe, BillFilters, BillRow, Pagination],
  templateUrl: './recurring-bills.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecurringBills {
  bills = [
    {
      title: 'Elevate Education',
      dueDate: 'Monthly - 1st',
      amount: 250.0,
      paid: true,
      toPaySoon: false,
      image: './images/avatars/elevate-education.jpg'
    },
    {
      title: 'Bravo Zen Spa',
      dueDate: 'Monthly - 3rd',
      amount: 70.0,
      paid: true,
      toPaySoon: false,
      image: './images/avatars/serenity-spa-and-wellness.jpg'
    },
    {
      title: 'Charlie Electric Company',
      dueDate: 'Monthly - 5th',
      amount: 10.0,
      paid: false,
      toPaySoon: true,
      image: './images/avatars/spark-electric-solutions.jpg'
    },
    {
      title: 'Delta Taxi',
      dueDate: 'Monthly - 6th',
      amount: 30.0,
      paid: false,
      toPaySoon: true,
      image: './images/avatars/swift-ride-share.jpg'
    },
    {
      title: 'Echo Game Store',
      dueDate: 'Monthly - 12th',
      amount: 5.0,
      paid: true,
      toPaySoon: false,
      image: './images/avatars/pixel-playground.jpg'
    },
    {
      title: 'Echo Game Store',
      dueDate: 'Monthly - 16th',
      amount: 10.0,
      paid: true,
      toPaySoon: false,
      image: './images/avatars/pixel-playground.jpg'
    },
    {
      title: 'Tango Gas Company',
      dueDate: 'Monthly - 22nd',
      amount: 225.0,
      paid: false,
      toPaySoon: false,
      image: './images/avatars/ecofuel-energy.jpg'
    },
    {
      title: 'Juliet Restaurant',
      dueDate: 'Monthly - 28th',
      amount: 950.0,
      paid: false,
      toPaySoon: false,
      image: './images/avatars/savory-bites-bistro.jpg'
    }
  ]
}
