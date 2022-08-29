import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFlatComponent } from './register-flat.component';

describe('RegisterFlatComponent', () => {
  let component: RegisterFlatComponent;
  let fixture: ComponentFixture<RegisterFlatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterFlatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
