import { TestBed } from '@angular/core/testing';

import { CollaboratoryService } from './collaboratory.service';

describe('CollaboratoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollaboratoryService = TestBed.get(CollaboratoryService);
    expect(service).toBeTruthy();
  });
});
