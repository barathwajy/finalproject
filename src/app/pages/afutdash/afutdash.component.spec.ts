import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfutdashComponent } from './afutdash.component';

describe('AfutdashComponent', () => {
  let component: AfutdashComponent;
  let fixture: ComponentFixture<AfutdashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AfutdashComponent]
    });
    fixture = TestBed.createComponent(AfutdashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
