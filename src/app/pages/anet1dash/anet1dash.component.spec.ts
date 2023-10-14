import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Anet1dashComponent } from './anet1dash.component';

describe('Anet1dashComponent', () => {
  let component: Anet1dashComponent;
  let fixture: ComponentFixture<Anet1dashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Anet1dashComponent]
    });
    fixture = TestBed.createComponent(Anet1dashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
