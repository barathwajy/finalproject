import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Asubs1dashComponent } from './asubs1dash.component';

describe('Asubs1dashComponent', () => {
  let component: Asubs1dashComponent;
  let fixture: ComponentFixture<Asubs1dashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Asubs1dashComponent]
    });
    fixture = TestBed.createComponent(Asubs1dashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
