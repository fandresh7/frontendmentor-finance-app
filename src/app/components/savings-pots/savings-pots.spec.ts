import { ComponentFixture, TestBed } from '@angular/core/testing'

import { SavingsPots } from './savings-pots'

describe('SavingsPots', () => {
  let component: SavingsPots
  let fixture: ComponentFixture<SavingsPots>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavingsPots]
    }).compileComponents()

    fixture = TestBed.createComponent(SavingsPots)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
