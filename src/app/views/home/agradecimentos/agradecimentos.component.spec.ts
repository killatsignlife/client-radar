import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgradecimentosComponent } from './agradecimentos.component';

describe('AgradecimentosComponent', () => {
  let component: AgradecimentosComponent;
  let fixture: ComponentFixture<AgradecimentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgradecimentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgradecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
