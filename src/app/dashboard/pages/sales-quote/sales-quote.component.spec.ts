import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesQuoteComponent } from './sales-quote.component';

describe('SalesQuoteComponent', () => {
  let component: SalesQuoteComponent;
  let fixture: ComponentFixture<SalesQuoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesQuoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesQuoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
