import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbTableComponent } from './db-table.component';

describe('DbTableComponent', () => {
  let component: DbTableComponent;
  let fixture: ComponentFixture<DbTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DbTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DbTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
