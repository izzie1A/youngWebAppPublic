import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbItemCardDialogComponent } from './fb-item-card-dialog.component';

describe('FbItemCardDialogComponent', () => {
  let component: FbItemCardDialogComponent;
  let fixture: ComponentFixture<FbItemCardDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FbItemCardDialogComponent]
    });
    fixture = TestBed.createComponent(FbItemCardDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
