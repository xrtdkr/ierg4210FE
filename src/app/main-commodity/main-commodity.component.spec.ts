import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCommodityComponent } from './main-commodity.component';

describe('MainCommodityComponent', () => {
  let component: MainCommodityComponent;
  let fixture: ComponentFixture<MainCommodityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCommodityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
