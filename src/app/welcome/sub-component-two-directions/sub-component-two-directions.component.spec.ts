import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponentTwoDirectionsComponent } from './sub-component-two-directions.component';

describe('SubComponentTwoDirectionsComponent', () => {
  let component: SubComponentTwoDirectionsComponent;
  let fixture: ComponentFixture<SubComponentTwoDirectionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubComponentTwoDirectionsComponent]
    });
    fixture = TestBed.createComponent(SubComponentTwoDirectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
