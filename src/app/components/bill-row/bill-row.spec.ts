import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BillRow } from './bill-row'

describe('BillRow', () => {
  let component: BillRow
  let fixture: ComponentFixture<BillRow>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BillRow]
    }).compileComponents()

    fixture = TestBed.createComponent(BillRow)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
