import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmployeHeaderComponent } from './details-employe-header.component';

describe('DetailsEmployeHeaderComponent', () => {
  let component: DetailsEmployeHeaderComponent;
  let fixture: ComponentFixture<DetailsEmployeHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEmployeHeaderComponent]
    });
    fixture = TestBed.createComponent(DetailsEmployeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
