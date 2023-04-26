import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDesaparecidoComponent } from './update-desaparecido.component';

describe('UpdateDesaparecidoComponent', () => {
  let component: UpdateDesaparecidoComponent;
  let fixture: ComponentFixture<UpdateDesaparecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDesaparecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDesaparecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
