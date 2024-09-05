import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgapuja2023Component } from './durgapuja2023.component';

describe('Durgapuja2023Component', () => {
  let component: Durgapuja2023Component;
  let fixture: ComponentFixture<Durgapuja2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Durgapuja2023Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Durgapuja2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
