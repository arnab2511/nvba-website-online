import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Durgapuja2022Component } from './durgapuja2022.component';

describe('Durgapuja2022Component', () => {
  let component: Durgapuja2022Component;
  let fixture: ComponentFixture<Durgapuja2022Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Durgapuja2022Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Durgapuja2022Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
