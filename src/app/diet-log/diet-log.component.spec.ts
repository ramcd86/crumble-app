import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DietLogComponent } from './diet-log.component';

describe('DietLogComponent', () => {
  let component: DietLogComponent;
  let fixture: ComponentFixture<DietLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DietLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DietLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
