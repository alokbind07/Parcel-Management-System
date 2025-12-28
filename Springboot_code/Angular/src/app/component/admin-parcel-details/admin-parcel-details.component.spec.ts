import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminParcelDetailsComponent } from './admin-parcel-details.component';

describe('AdminParcelDetailsComponent', () => {
  let component: AdminParcelDetailsComponent;
  let fixture: ComponentFixture<AdminParcelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminParcelDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminParcelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
