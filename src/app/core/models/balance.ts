export interface Balance {
  current: number
  income: number
  expenses: number
}

export enum LocalStorageKeys {
  Balance = 'balance',
  Budgets = 'budgets',
  Transactions = 'transactions',
  Pot = 'pot'
}
