import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaHeroesComponent } from './prueba-heroes.component';

describe('PruebaHeroesComponent', () => {
  let component: PruebaHeroesComponent;
  let fixture: ComponentFixture<PruebaHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaHeroesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
