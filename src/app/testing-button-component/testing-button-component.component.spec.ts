import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingButtonComponentComponent } from './testing-button-component.component';

describe('TestingButtonComponentComponent', () => {
  let component: TestingButtonComponentComponent;
  let fixture: ComponentFixture<TestingButtonComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestingButtonComponentComponent]
    });
    fixture = TestBed.createComponent(TestingButtonComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
