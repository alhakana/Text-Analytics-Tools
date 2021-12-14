import { TestBed } from '@angular/core/testing';

import { LanguageDetectionService } from './language-detection.service';

describe('LanguageDetectionService', () => {
  let service: LanguageDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LanguageDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
