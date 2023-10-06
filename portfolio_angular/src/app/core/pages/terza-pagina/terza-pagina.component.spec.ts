import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerzaPaginaComponent } from './terza-pagina.component';

describe('TerzaPaginaComponent', () => {
  let component: TerzaPaginaComponent;
  let fixture: ComponentFixture<TerzaPaginaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerzaPaginaComponent]
    });
    fixture = TestBed.createComponent(TerzaPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
