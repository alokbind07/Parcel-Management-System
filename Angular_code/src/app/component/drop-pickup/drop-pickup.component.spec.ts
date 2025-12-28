import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropPickupComponent } from './drop-pickup.component';

describe('DropPickupComponent', () => {
  let component: DropPickupComponent;
  let fixture: ComponentFixture<DropPickupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropPickupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropPickupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
