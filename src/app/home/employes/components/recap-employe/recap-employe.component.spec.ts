import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapEmployeComponent } from './recap-employe.component';

describe('RecapEmployeComponent', () => {
  let component: RecapEmployeComponent;
  let fixture: ComponentFixture<RecapEmployeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecapEmployeComponent]
    });
    fixture = TestBed.createComponent(RecapEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
