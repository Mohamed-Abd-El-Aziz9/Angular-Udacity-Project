import { TestBed } from '@angular/core/testing';

import { GetProductServisesService } from './get-product-servises.service';

describe('GetProductServisesService', () => {
  let service: GetProductServisesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetProductServisesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
