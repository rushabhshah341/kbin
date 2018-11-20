import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratoryDetailComponent } from './collaboratory-detail.component';

describe('CollaboratoryDetailComponent', () => {
  let component: CollaboratoryDetailComponent;
  let fixture: ComponentFixture<CollaboratoryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaboratoryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
