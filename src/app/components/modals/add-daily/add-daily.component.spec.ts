import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDailyComponent } from './add-daily.component';

describe('AddDailyComponent', () => {
  let component: AddDailyComponent;
  let fixture: ComponentFixture<AddDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddDailyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
