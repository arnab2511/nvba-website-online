import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechadvisorComponent } from './techadvisor.component';

describe('TechadvisorComponent', () => {
  let component: TechadvisorComponent;
  let fixture: ComponentFixture<TechadvisorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechadvisorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechadvisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
