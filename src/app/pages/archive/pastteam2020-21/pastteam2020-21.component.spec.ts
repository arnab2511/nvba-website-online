import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastteam2020To21Component } from './pastteam2020-21.component';

describe('Pastteam2020To21Component', () => {
  let component: Pastteam2020To21Component;
  let fixture: ComponentFixture<Pastteam2020To21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pastteam2020To21Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pastteam2020To21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
