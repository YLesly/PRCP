import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RcpComponent } from './RcpComponent';

describe('RcpComponent', () => {
  let component: RcpComponent;
  let fixture: ComponentFixture<RcpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RcpComponent]
    });
    fixture = TestBed.createComponent(RcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
