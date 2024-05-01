import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbItemCardListComponent } from './fb-item-card-list.component';

describe('FbItemCardListComponent', () => {
  let component: FbItemCardListComponent;
  let fixture: ComponentFixture<FbItemCardListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FbItemCardListComponent]
    });
    fixture = TestBed.createComponent(FbItemCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
