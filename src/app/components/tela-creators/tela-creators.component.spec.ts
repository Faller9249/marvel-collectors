import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaCreatorsComponent } from './tela-creators.component';

describe('TelaCreatorsComponent', () => {
  let component: TelaCreatorsComponent;
  let fixture: ComponentFixture<TelaCreatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TelaCreatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaCreatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
