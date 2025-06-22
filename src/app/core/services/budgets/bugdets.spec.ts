import { TestBed } from '@angular/core/testing'

import { Bugdets } from './bugdets'

describe('Bugdets', () => {
  let service: Bugdets

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(Bugdets)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
