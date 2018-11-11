import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { testDetailComponent } from './test-detail.component';

describe('testDetailComponent', () => {
  let component: testDetailComponent;
  let fixture: ComponentFixture<testDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ testDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(testDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
