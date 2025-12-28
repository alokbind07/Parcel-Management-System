import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookParcelComponent } from './bookparcel.component';

describe('BookparcelComponent', () => {
  let component: BookParcelComponent;
  let fixture: ComponentFixture<BookParcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookParcelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookParcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
