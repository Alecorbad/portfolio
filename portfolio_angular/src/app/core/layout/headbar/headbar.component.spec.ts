import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadbarComponent } from './headbar.component';

describe('HeadbarComponent', () => {
  let component: HeadbarComponent;
  let fixture: ComponentFixture<HeadbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
