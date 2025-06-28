import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BudgetsChart } from './budgets-chart'

describe('BudgetsChart', () => {
  let component: BudgetsChart
  let fixture: ComponentFixture<BudgetsChart>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetsChart]
    }).compileComponents()

    fixture = TestBed.createComponent(BudgetsChart)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
