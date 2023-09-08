import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGroupsComponent } from './create-groups.component';

describe('CreateGroupsComponent', () => {
  let component: CreateGroupsComponent;
  let fixture: ComponentFixture<CreateGroupsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateGroupsComponent]
    });
    fixture = TestBed.createComponent(CreateGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
