import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaboratoryComponent } from './collaboratory.component';

describe('CollaboratoryComponent', () => {
  let component: CollaboratoryComponent;
  let fixture: ComponentFixture<CollaboratoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollaboratoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
