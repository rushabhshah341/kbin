import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbiComponent } from './rbi.component';

describe('RbiComponent', () => {
  let component: RbiComponent;
  let fixture: ComponentFixture<RbiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
