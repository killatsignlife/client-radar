import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateVoluntarioComponent } from './update-voluntario.component';

describe('UpdateVoluntarioComponent', () => {
  let component: UpdateVoluntarioComponent;
  let fixture: ComponentFixture<UpdateVoluntarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateVoluntarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateVoluntarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
