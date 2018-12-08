import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CateAdminFormComponent } from './cate-admin-form.component';

describe('CateAdminFormComponent', () => {
  let component: CateAdminFormComponent;
  let fixture: ComponentFixture<CateAdminFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CateAdminFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CateAdminFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
