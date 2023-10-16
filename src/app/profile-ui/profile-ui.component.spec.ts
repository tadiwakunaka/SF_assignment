import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileUIComponent } from './profile-ui.component';

describe('ProfileUIComponent', () => {
  let component: ProfileUIComponent;
  let fixture: ComponentFixture<ProfileUIComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileUIComponent]
    });
    fixture = TestBed.createComponent(ProfileUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
