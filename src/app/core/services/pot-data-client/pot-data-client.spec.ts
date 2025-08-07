import { TestBed } from '@angular/core/testing'
import { PotDataClient } from './pot-data-client'

describe('PotDataClient', () => {
  let service: PotDataClient

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(PotDataClient)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
