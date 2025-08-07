import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable, of, tap } from 'rxjs'

import { LocalStorageKeys, Transaction } from '@core/models'
import { generateUuid } from '@core/utils'
import { LocalStorage } from '@shared/services'

@Injectable({
  providedIn: 'root'
})
export class TransactionDataClient {
  private localStorage = inject(LocalStorage)
  private http = inject(HttpClient)

  getTransactions(): Observable<Transaction[]> {
    const key = LocalStorageKeys.Transactions

    const transactions = this.localStorage.getItem<Transaction[]>(key)
    if (transactions) return of(transactions)

    return this.http.get<Transaction[]>('/data/transactions.json').pipe(tap(transactions => this.localStorage.setItem(key, transactions)))
  }

  createTransaction(transaction: Transaction): Observable<Transaction> {
    const transactions = this.localStorage.getItem<Transaction[]>(LocalStorageKeys.Transactions) || []

    const id = generateUuid()
    transaction.id = id

    transactions.unshift(transaction)
    this.localStorage.setItem(LocalStorageKeys.Transactions, transactions)

    return of(transaction)
  }

  updateTransaction(id: string, transaction: Transaction): Observable<Transaction> {
    const transactions = this.localStorage.getItem<Transaction[]>(LocalStorageKeys.Transactions) || []

    const index = transactions.findIndex(t => t.id === id)
    if (index === -1) {
      throw new Error(`Transaction with ${id} not found`)
    }

    transactions[index] = { ...transaction, id }
    this.localStorage.setItem(LocalStorageKeys.Transactions, transactions)

    return of(transaction)
  }

  deleteTransaction(id: string): Observable<boolean> {
    const transactions = this.localStorage.getItem<Transaction[]>(LocalStorageKeys.Transactions) || []

    const index = transactions.findIndex(t => t.id === id)
    if (index === -1) {
      throw new Error(`Transaction with ${id} not found`)
    }

    transactions.splice(index, 1)
    this.localStorage.setItem(LocalStorageKeys.Transactions, transactions)

    return of(true)
  }
}
