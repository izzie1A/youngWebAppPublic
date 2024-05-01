import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbItemCardComponent } from './fb-item-card.component';

describe('FbItemCardComponent', () => {
  let component: FbItemCardComponent;
  let fixture: ComponentFixture<FbItemCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FbItemCardComponent]
    });
    fixture = TestBed.createComponent(FbItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
