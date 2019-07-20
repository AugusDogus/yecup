import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageMapPage } from './coverage-map.page';

describe('CoverageMapPage', () => {
  let component: CoverageMapPage;
  let fixture: ComponentFixture<CoverageMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoverageMapPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
