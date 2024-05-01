import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurClinetComponent } from './our-clinet.component';

describe('OurClinetComponent', () => {
  let component: OurClinetComponent;
  let fixture: ComponentFixture<OurClinetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurClinetComponent]
    });
    fixture = TestBed.createComponent(OurClinetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
