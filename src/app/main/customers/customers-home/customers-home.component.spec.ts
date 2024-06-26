import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersHomeComponent } from './customers-home.component';

describe('CustomersHomeComponent', () => {
  let component: CustomersHomeComponent;
  let fixture: ComponentFixture<CustomersHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
