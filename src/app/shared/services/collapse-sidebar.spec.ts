import { TestBed } from '@angular/core/testing'

import { CollapseSidebar } from './collapse-sidebar'

describe('CollapseSidebar', () => {
  let service: CollapseSidebar

  beforeEach(() => {
    TestBed.configureTestingModule({})
    service = TestBed.inject(CollapseSidebar)
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })
})
