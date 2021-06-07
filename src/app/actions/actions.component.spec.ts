import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsComponent } from './actions.component';

describe('ActionsComponent', () => {
  let component: ActionsComponent;
  let fixture: ComponentFixture<ActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should has default set of actions', () => {
    expect(component.actions.length).toBeGreaterThan(0);
  });

  it('should show default set of actions', () => {
    const actionElements = fixture.nativeElement.querySelectorAll('.action');
    expect(actionElements.length).toBeGreaterThan(0);
  });
});
