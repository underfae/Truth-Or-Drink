import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesDialogComponent } from './games-dialog.component';

describe('GamesDialogComponent', () => {
  let component: GamesDialogComponent;
  let fixture: ComponentFixture<GamesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamesDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
