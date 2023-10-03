import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComponentMonoDirectionComponent } from './sub-component-mono-direction.component';

describe('SubComponentMonoDirectionComponent', () => {
  let component: SubComponentMonoDirectionComponent;
  let fixture: ComponentFixture<SubComponentMonoDirectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubComponentMonoDirectionComponent]
    });
    fixture = TestBed.createComponent(SubComponentMonoDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
