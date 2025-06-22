import { ComponentFixture, TestBed } from '@angular/core/testing'

import { PotItem } from './pot-item'

describe('PotItem', () => {
  let component: PotItem
  let fixture: ComponentFixture<PotItem>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PotItem]
    }).compileComponents()

    fixture = TestBed.createComponent(PotItem)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
