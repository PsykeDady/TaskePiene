import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbViewComponent } from './db-view.component';

describe('DbViewComponent', () => {
  let component: DbViewComponent;
  let fixture: ComponentFixture<DbViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
