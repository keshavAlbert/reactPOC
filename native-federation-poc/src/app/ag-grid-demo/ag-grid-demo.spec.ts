import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridDemo } from './ag-grid-demo';

describe('AgGridDemo', () => {
  let component: AgGridDemo;
  let fixture: ComponentFixture<AgGridDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgGridDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
