import { TestBed } from '@angular/core/testing'
import { TransactionDataClient } from './transaction-data-client'

describe('TransactionDataClient', () => {
  let service: TransactionDataClient

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(TransactionDataClient)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
