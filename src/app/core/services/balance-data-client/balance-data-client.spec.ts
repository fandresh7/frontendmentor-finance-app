import { TestBed } from '@angular/core/testing'
import { BalanceDataClient } from './balance-data-client'

describe('BalanceDataClient', () => {
  let service: BalanceDataClient

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(BalanceDataClient)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
