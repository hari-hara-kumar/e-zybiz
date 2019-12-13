import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesQuoteDetailComponent } from './sales-quote-detail.component';

describe('SalesQuoteDetailComponent', () => {
  let component: SalesQuoteDetailComponent;
  let fixture: ComponentFixture<SalesQuoteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesQuoteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesQuoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
