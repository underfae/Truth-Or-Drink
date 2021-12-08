import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaresComponent } from './dares.component';

describe('DaresComponent', () => {
  let component: DaresComponent;
  let fixture: ComponentFixture<DaresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
