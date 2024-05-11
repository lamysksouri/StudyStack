import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestFormateurComponent } from './gest-formateur.component';

describe('GestFormateurComponent', () => {
  let component: GestFormateurComponent;
  let fixture: ComponentFixture<GestFormateurComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestFormateurComponent]
    });
    fixture = TestBed.createComponent(GestFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
