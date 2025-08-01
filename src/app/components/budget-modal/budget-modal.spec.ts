import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BudgetModal } from './budget-modal'

describe('BudgetModal', () => {
  let component: BudgetModal
  let fixture: ComponentFixture<BudgetModal>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetModal]
    }).compileComponents()

    fixture = TestBed.createComponent(BudgetModal)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
