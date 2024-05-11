import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderProfComponent } from './header-prof.component';

describe('HeaderProfComponent', () => {
  let component: HeaderProfComponent;
  let fixture: ComponentFixture<HeaderProfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderProfComponent]
    });
    fixture = TestBed.createComponent(HeaderProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
