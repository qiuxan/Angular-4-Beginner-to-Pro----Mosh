import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubProfileComponent } from './git-hub-profile.component';

describe('GitHubProfileComponent', () => {
  let component: GitHubProfileComponent;
  let fixture: ComponentFixture<GitHubProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GitHubProfileComponent]
    });
    fixture = TestBed.createComponent(GitHubProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
