import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewssiteComponent } from './newssite.component';

describe('NewssiteComponent', () => {
  let component: NewssiteComponent;
  let fixture: ComponentFixture<NewssiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewssiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewssiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
