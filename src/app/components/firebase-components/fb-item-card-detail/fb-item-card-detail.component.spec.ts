import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbItemCardDetailComponent } from './fb-item-card-detail.component';

describe('FbItemCardDetailComponent', () => {
  let component: FbItemCardDetailComponent;
  let fixture: ComponentFixture<FbItemCardDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FbItemCardDetailComponent]
    });
    fixture = TestBed.createComponent(FbItemCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
