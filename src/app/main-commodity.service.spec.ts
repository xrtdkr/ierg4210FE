import { TestBed } from '@angular/core/testing';

import { MainCommodityService } from './main-commodity.service';

describe('MainCommodityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainCommodityService = TestBed.get(MainCommodityService);
    expect(service).toBeTruthy();
  });
});
