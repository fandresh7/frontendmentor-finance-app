import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable, of, tap } from 'rxjs'

import { LocalStorageKeys, Pot } from '@core/models'
import { generateUuid } from '@core/utils'
import { LocalStorage } from '@shared/services'

@Injectable({
  providedIn: 'root'
})
export class PotDataClient {
  private localStorage = inject(LocalStorage)
  private http = inject(HttpClient)

  getPots(): Observable<Pot[]> {
    const key = LocalStorageKeys.Pot

    const pots = this.localStorage.getItem<Pot[]>(key)
    if (pots) return of(pots)

    return this.http.get<Pot[]>('/data/pots.json').pipe(tap(pots => this.localStorage.setItem(key, pots)))
  }

  createPot(pot: Pot): Observable<Pot> {
    const pots = this.localStorage.getItem<Pot[]>(LocalStorageKeys.Pot) || []

    const id = generateUuid()
    pot.id = id

    pots.unshift(pot)
    this.localStorage.setItem(LocalStorageKeys.Pot, pots)

    return of(pot)
  }

  updatePot(id: string, pot: Pot): Observable<Pot> {
    const pots = this.localStorage.getItem<Pot[]>(LocalStorageKeys.Pot) || []

    const index = pots.findIndex(p => p.id === id)
    if (index === -1) {
      throw new Error(`Pot with ${id} not found`)
    }

    pots[index] = { ...pot, id }
    this.localStorage.setItem(LocalStorageKeys.Pot, pots)

    return of(pot)
  }

  deletePot(id: string): Observable<boolean> {
    const pots = this.localStorage.getItem<Pot[]>(LocalStorageKeys.Pot) || []

    const index = pots.findIndex(p => p.id === id)
    if (index === -1) {
      throw new Error(`Pot with ${id} not found`)
    }

    pots.splice(index, 1)
    this.localStorage.setItem(LocalStorageKeys.Pot, pots)

    return of(true)
  }
}
