import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeVisualizationComponent } from './code-visualization.component';

describe('CodeVisualizationComponent', () => {
  let component: CodeVisualizationComponent;
  let fixture: ComponentFixture<CodeVisualizationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodeVisualizationComponent]
    });
    fixture = TestBed.createComponent(CodeVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
