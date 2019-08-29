import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLikeComponent } from './app-like.component';

describe('AppLikeComponent', () => {
  let component: AppLikeComponent;
  let fixture: ComponentFixture<AppLikeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLikeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
