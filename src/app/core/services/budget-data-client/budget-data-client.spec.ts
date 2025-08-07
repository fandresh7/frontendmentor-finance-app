import { TestBed } from '@angular/core/testing'
import { BudgetDataClient } from './budget-data-client'

describe('BudgetDataClient', () => {
  let service: BudgetDataClient

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(BudgetDataClient)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
