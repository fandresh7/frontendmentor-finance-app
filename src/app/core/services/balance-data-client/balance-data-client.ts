import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable, of, tap } from 'rxjs'

import { Balance, LocalStorageKeys } from '@core/models'
import { LocalStorage } from '@shared/services'

@Injectable({
  providedIn: 'root'
})
export class BalanceDataClient {
  private localStorage = inject(LocalStorage)
  private http = inject(HttpClient)

  getBalance(): Observable<Balance> {
    const key = LocalStorageKeys.Balance

    const balance = this.localStorage.getItem<Balance>(key)
    if (balance) return of(balance)

    return this.http.get<Balance>('/data/balance.json').pipe(tap(balance => this.localStorage.setItem(key, balance)))
  }

  updateBalance(balance: Balance): Observable<Balance> {
    this.localStorage.setItem(LocalStorageKeys.Balance, balance)

    return of(balance)
  }
}
