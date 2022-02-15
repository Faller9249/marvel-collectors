import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCharactersComponent } from './tela-characters.component';

describe('TelaCharactersComponent', () => {
  let component: TelaCharactersComponent;
  let fixture: ComponentFixture<TelaCharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCharactersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
