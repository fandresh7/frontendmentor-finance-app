import { Routes } from '@angular/router'
import { AuthLayout } from '@layouts/auth-layout/auth-layout'
import { DashboardLayout } from '@layouts/dashboard-layout/dashboard-layout'

export const routes: Routes = [
  {
    path: '',
    component: DashboardLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('@pages/home/home').then(m => m.Home)
      },
      {
        path: 'transactions',
        loadComponent: () => import('@pages/transactions/transactions').then(m => m.Transactions)
      },
      {
        path: 'pots',
        loadComponent: () => import('@pages/pots/pots').then(m => m.Pots)
      },
      {
        path: 'budgets',
        loadComponent: () => import('@pages/budgets/budgets').then(m => m.Budgets)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayout,
    children: [
      {
        path: 'login',
        loadComponent: () => import('@pages/login/login').then(m => m.Login)
      },
      {
        path: 'signup',
        loadComponent: () => import('@pages/signup/signup').then(m => m.Signup)
      }
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
]
