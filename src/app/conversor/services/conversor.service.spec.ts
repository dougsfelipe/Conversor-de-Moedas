import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';

import { ConversorService } from './conversor.service';

describe('ConversorService', () => {
  let service: ConversorService;

  beforeEach(() => {
    TestBed.configureTestingModule({imports: [HttpClient]});
    service = TestBed.inject(ConversorService);
  });

  
});
