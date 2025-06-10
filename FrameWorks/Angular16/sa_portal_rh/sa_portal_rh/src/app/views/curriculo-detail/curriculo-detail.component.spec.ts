import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculoDetailComponent } from './curriculo-detail.component';

describe('CurriculoDetailComponent', () => {
  let component: CurriculoDetailComponent;
  let fixture: ComponentFixture<CurriculoDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurriculoDetailComponent]
    });
    fixture = TestBed.createComponent(CurriculoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
