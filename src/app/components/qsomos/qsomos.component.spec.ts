import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QSomosComponent } from './qsomos.component';

describe('QSomosComponent', () => {
  let component: QSomosComponent;
  let fixture: ComponentFixture<QSomosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QSomosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QSomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
