import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProgressBarWithTarget } from './progress-bar-with-target'

describe('ProgressBarWithTarget', () => {
  let component: ProgressBarWithTarget
  let fixture: ComponentFixture<ProgressBarWithTarget>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgressBarWithTarget]
    }).compileComponents()

    fixture = TestBed.createComponent(ProgressBarWithTarget)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
