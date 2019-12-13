import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryFormDetailComponent } from './query-form-detail.component';

describe('QueryFormDetailComponent', () => {
  let component: QueryFormDetailComponent;
  let fixture: ComponentFixture<QueryFormDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryFormDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryFormDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
