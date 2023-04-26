import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDesaparecidoComponent } from './delete-desaparecido.component';

describe('DeleteDesaparecidoComponent', () => {
  let component: DeleteDesaparecidoComponent;
  let fixture: ComponentFixture<DeleteDesaparecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDesaparecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDesaparecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
