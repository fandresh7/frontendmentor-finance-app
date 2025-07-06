import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CategorySummaryItem } from './category-summary-item'

describe('CategorySummaryItem', () => {
  let component: CategorySummaryItem
  let fixture: ComponentFixture<CategorySummaryItem>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategorySummaryItem]
    }).compileComponents()

    fixture = TestBed.createComponent(CategorySummaryItem)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
