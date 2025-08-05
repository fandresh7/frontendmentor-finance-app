import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PotDeleteModal } from './pot-delete-modal'

describe('PotDeleteModal', () => {
  let component: PotDeleteModal
  let fixture: ComponentFixture<PotDeleteModal>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotDeleteModal]
    }).compileComponents()

    fixture = TestBed.createComponent(PotDeleteModal)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
