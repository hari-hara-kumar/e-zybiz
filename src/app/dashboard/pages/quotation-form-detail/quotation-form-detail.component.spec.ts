import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotationFormDetailComponent } from './quotation-form-detail.component';

describe('QuotationFormDetailComponent', () => {
  let component: QuotationFormDetailComponent;
  let fixture: ComponentFixture<QuotationFormDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotationFormDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotationFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
