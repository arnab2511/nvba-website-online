import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Poilabaishak2024Component } from './poilabaishak2024.component';

describe('Poilabaishak2024Component', () => {
  let component: Poilabaishak2024Component;
  let fixture: ComponentFixture<Poilabaishak2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Poilabaishak2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Poilabaishak2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
