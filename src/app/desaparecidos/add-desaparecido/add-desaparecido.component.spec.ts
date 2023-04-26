import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDesaparecidoComponent } from './add-desaparecido.component';

describe('AddDesaparecidoComponent', () => {
  let component: AddDesaparecidoComponent;
  let fixture: ComponentFixture<AddDesaparecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDesaparecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDesaparecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
