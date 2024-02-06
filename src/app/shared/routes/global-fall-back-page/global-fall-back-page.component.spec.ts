import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalFallBackPageComponent } from './global-fall-back-page.component';

describe('GlobalFallBackPageComponent', () => {
  let component: GlobalFallBackPageComponent;
  let fixture: ComponentFixture<GlobalFallBackPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GlobalFallBackPageComponent]
    });
    fixture = TestBed.createComponent(GlobalFallBackPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
