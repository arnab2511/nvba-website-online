import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Picnic2024Component } from './picnic2024.component';

describe('Picnic2024Component', () => {
  let component: Picnic2024Component;
  let fixture: ComponentFixture<Picnic2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Picnic2024Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Picnic2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
