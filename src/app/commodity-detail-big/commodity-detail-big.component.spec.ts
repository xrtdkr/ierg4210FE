import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityDetailBigComponent } from './commodity-detail-big.component';

describe('CommodityDetailBigComponent', () => {
  let component: CommodityDetailBigComponent;
  let fixture: ComponentFixture<CommodityDetailBigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityDetailBigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityDetailBigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
