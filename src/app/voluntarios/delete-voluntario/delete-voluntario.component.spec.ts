import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteVoluntarioComponent } from './delete-voluntario.component';

describe('DeleteVoluntarioComponent', () => {
  let component: DeleteVoluntarioComponent;
  let fixture: ComponentFixture<DeleteVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteVoluntarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
