import { TestBed } from '@angular/core/testing';

import { CommodityElementService } from './commodity-element.service';

describe('CommodityElementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommodityElementService = TestBed.get(CommodityElementService);
    expect(service).toBeTruthy();
  });
});
