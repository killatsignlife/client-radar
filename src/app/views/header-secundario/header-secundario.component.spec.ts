import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSecundarioComponent } from './header-secundario.component';

describe('HeaderSecundarioComponent', () => {
  let component: HeaderSecundarioComponent;
  let fixture: ComponentFixture<HeaderSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSecundarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
