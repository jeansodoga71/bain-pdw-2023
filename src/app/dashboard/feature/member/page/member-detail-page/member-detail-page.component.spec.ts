import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailPageComponent } from './member-detail-page.component';

describe('MemberDetailPageComponent', () => {
  let component: MemberDetailPageComponent;
  let fixture: ComponentFixture<MemberDetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MemberDetailPageComponent]
    });
    fixture = TestBed.createComponent(MemberDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
