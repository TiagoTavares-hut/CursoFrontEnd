import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterderComponent } from './footerder.component';

describe('FooterderComponent', () => {
  let component: FooterderComponent;
  let fixture: ComponentFixture<FooterderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterderComponent]
    });
    fixture = TestBed.createComponent(FooterderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
