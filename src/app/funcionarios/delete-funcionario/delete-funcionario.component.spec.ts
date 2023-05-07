import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFuncionarioComponent } from './delete-funcionario.component';

describe('DeleteFuncionarioComponent', () => {
  let component: DeleteFuncionarioComponent;
  let fixture: ComponentFixture<DeleteFuncionarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFuncionarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
