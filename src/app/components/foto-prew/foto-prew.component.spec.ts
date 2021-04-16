import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoPrewComponent } from './foto-prew.component';

describe('FotoPrewComponent', () => {
  let component: FotoPrewComponent;
  let fixture: ComponentFixture<FotoPrewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotoPrewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoPrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
