import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxWorkflowComponent } from './ngx-workflow.component';

describe('NgxWorkflowComponent', () => {
  let component: NgxWorkflowComponent;
  let fixture: ComponentFixture<NgxWorkflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxWorkflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxWorkflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
