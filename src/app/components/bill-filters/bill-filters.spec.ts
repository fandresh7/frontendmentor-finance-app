import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BillFilters } from './bill-filters'

describe('BillFilters', () => {
  let component: BillFilters
  let fixture: ComponentFixture<BillFilters>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillFilters]
    }).compileComponents()

    fixture = TestBed.createComponent(BillFilters)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
