import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourPageComponent } from './your-page.component';

describe('YourPageComponent', () => {
  let component: YourPageComponent;
  let fixture: ComponentFixture<YourPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [YourPageComponent]
    });
    fixture = TestBed.createComponent(YourPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
