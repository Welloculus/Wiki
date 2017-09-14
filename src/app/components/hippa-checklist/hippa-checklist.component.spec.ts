import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HippaChecklistComponent } from './hippa-checklist.component';

describe('HippaChecklistComponent', () => {
  let component: HippaChecklistComponent;
  let fixture: ComponentFixture<HippaChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HippaChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HippaChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
