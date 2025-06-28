import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BugdetsSummaryCard } from './bugdets-summary-card'

describe('BugdetsSummaryCard', () => {
  let component: BugdetsSummaryCard
  let fixture: ComponentFixture<BugdetsSummaryCard>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BugdetsSummaryCard]
    }).compileComponents()

    fixture = TestBed.createComponent(BugdetsSummaryCard)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
