import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HippaForWelloculusComponent } from './hippa-for-welloculus.component';

describe('HippaForWelloculusComponent', () => {
  let component: HippaForWelloculusComponent;
  let fixture: ComponentFixture<HippaForWelloculusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HippaForWelloculusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HippaForWelloculusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
