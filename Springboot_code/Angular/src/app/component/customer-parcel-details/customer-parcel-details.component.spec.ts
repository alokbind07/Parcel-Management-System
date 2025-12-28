import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerParcelDetailsComponent } from './customer-parcel-details.component';

describe('CustomerParcelDetailsComponent', () => {
  let component: CustomerParcelDetailsComponent;
  let fixture: ComponentFixture<CustomerParcelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerParcelDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerParcelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
