import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable, of, tap } from 'rxjs'

import { LocalStorageKeys, Budget } from '@core/models'
import { generateUuid } from '@core/utils'
import { LocalStorage } from '@shared/services'

@Injectable({
  providedIn: 'root'
})
export class BudgetDataClient {
  private localStorage = inject(LocalStorage)
  private http = inject(HttpClient)

  getBudgets(): Observable<Budget[]> {
    const key = LocalStorageKeys.Budgets

    const budgets = this.localStorage.getItem<Budget[]>(key)
    if (budgets) return of(budgets)

    return this.http.get<Budget[]>('/data/budgets.json').pipe(tap(budgets => this.localStorage.setItem(key, budgets)))
  }

  createBudget(budget: Budget): Observable<Budget> {
    const budgets = this.localStorage.getItem<Budget[]>(LocalStorageKeys.Budgets) || []

    const id = generateUuid()
    budget.id = id

    budgets.unshift(budget)
    this.localStorage.setItem(LocalStorageKeys.Budgets, budgets)

    return of(budget)
  }

  updateBudget(id: string, budget: Budget): Observable<Budget> {
    const budgets = this.localStorage.getItem<Budget[]>(LocalStorageKeys.Budgets) || []

    const index = budgets.findIndex(b => b.id === id)
    if (index === -1) {
      throw new Error(`Budget with id ${id} not found`)
    }

    budgets[index] = { ...budget, id }
    this.localStorage.setItem(LocalStorageKeys.Budgets, budgets)

    return of(budget)
  }

  deleteBudget(budgetId: string): Observable<boolean> {
    const budgets = this.localStorage.getItem<Budget[]>(LocalStorageKeys.Budgets) || []

    const index = budgets.findIndex(b => b.id === budgetId)
    if (index === -1) {
      throw new Error(`Budget with id ${budgetId} not found`)
    }

    budgets.splice(index, 1)
    this.localStorage.setItem(LocalStorageKeys.Budgets, budgets)

    return of(true)
  }
}
