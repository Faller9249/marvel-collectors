import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaStoriesComponent } from './tela-stories.component';

describe('TelaStoriesComponent', () => {
  let component: TelaStoriesComponent;
  let fixture: ComponentFixture<TelaStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
