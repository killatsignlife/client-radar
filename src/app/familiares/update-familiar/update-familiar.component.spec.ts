import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFamiliarComponent } from './update-familiar.component';

describe('UpdateFamiliarComponent', () => {
  let component: UpdateFamiliarComponent;
  let fixture: ComponentFixture<UpdateFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFamiliarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
