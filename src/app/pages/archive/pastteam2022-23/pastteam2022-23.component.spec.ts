import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pastteam2022To23Component } from './pastteam2022-23.component';

describe('Pastteam2022To23Component', () => {
  let component: Pastteam2022To23Component;
  let fixture: ComponentFixture<Pastteam2022To23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pastteam2022To23Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pastteam2022To23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
