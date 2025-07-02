import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEmployeComponent } from './details-employe.component';

describe('DetailsEmployeComponent', () => {
  let component: DetailsEmployeComponent;
  let fixture: ComponentFixture<DetailsEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsEmployeComponent]
    });
    fixture = TestBed.createComponent(DetailsEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
