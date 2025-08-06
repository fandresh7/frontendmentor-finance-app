import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PotTransactionModal } from './pot-transaction-modal'

describe('PotTransactionModal', () => {
  let component: PotTransactionModal
  let fixture: ComponentFixture<PotTransactionModal>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotTransactionModal]
    }).compileComponents()

    fixture = TestBed.createComponent(PotTransactionModal)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
