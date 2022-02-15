import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaEventosComponent } from './tela-eventos.component';

describe('TelaEventosComponent', () => {
  let component: TelaEventosComponent;
  let fixture: ComponentFixture<TelaEventosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaEventosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaEventosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
