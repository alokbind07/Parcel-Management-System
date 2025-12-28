import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHistoryDetailsComponent } from './search-history-details.component';

describe('SearchHistoryDetailsComponent', () => {
  let component: SearchHistoryDetailsComponent;
  let fixture: ComponentFixture<SearchHistoryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchHistoryDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchHistoryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
