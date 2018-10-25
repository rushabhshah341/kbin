import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCollaboratoryComponent } from './post-collaboratory.component';

describe('PostCollaboratoryComponent', () => {
  let component: PostCollaboratoryComponent;
  let fixture: ComponentFixture<PostCollaboratoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCollaboratoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCollaboratoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
