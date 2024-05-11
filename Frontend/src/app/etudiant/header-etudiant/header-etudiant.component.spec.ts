import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEtudiantComponent } from './header-etudiant.component';

describe('HeaderEtudiantComponent', () => {
  let component: HeaderEtudiantComponent;
  let fixture: ComponentFixture<HeaderEtudiantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderEtudiantComponent]
    });
    fixture = TestBed.createComponent(HeaderEtudiantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
