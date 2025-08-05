import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PotModal } from './pot-modal'

describe('PotModal', () => {
  let component: PotModal
  let fixture: ComponentFixture<PotModal>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotModal]
    }).compileComponents()

    fixture = TestBed.createComponent(PotModal)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
