import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaComicsComponent } from './tela-comics.component';

describe('TelaComicsComponent', () => {
  let component: TelaComicsComponent;
  let fixture: ComponentFixture<TelaComicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaComicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
