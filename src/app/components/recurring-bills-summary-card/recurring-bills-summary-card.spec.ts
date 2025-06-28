import { ComponentFixture, TestBed } from '@angular/core/testing'

import { RecurringBillsSummaryCard } from './recurring-bills-summary-card'

describe('RecurringBillsSummaryCard', () => {
  let component: RecurringBillsSummaryCard
  let fixture: ComponentFixture<RecurringBillsSummaryCard>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecurringBillsSummaryCard]
    }).compileComponents()

    fixture = TestBed.createComponent(RecurringBillsSummaryCard)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
