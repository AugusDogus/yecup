import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeedTestPage } from './speed-test.page';

describe('SpeedTestPage', () => {
  let component: SpeedTestPage;
  let fixture: ComponentFixture<SpeedTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SpeedTestPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeedTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
