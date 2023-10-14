import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BardlogComponent } from './bardlog.component';

describe('BardlogComponent', () => {
  let component: BardlogComponent;
  let fixture: ComponentFixture<BardlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BardlogComponent]
    });
    fixture = TestBed.createComponent(BardlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
