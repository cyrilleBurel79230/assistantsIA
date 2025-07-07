import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaveavinComponent } from './caveavin.component';

describe('CaveavinComponent', () => {
  let component: CaveavinComponent;
  let fixture: ComponentFixture<CaveavinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaveavinComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaveavinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
