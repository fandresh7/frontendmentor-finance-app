import { ComponentFixture, TestBed } from '@angular/core/testing'

import { BugdetDeleteModal } from './bugdet-delete-modal'

describe('BugdetDeleteModal', () => {
  let component: BugdetDeleteModal
  let fixture: ComponentFixture<BugdetDeleteModal>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BugdetDeleteModal]
    }).compileComponents()

    fixture = TestBed.createComponent(BugdetDeleteModal)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
