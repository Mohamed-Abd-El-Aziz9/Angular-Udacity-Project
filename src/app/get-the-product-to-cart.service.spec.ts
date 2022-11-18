import { TestBed } from '@angular/core/testing';

import { GetTheProductToCartService } from './get-the-product-to-cart.service';

describe('GetTheProductToCartService', () => {
  let service: GetTheProductToCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTheProductToCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
