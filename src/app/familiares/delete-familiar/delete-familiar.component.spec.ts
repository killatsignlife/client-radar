import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFamiliarComponent } from './delete-familiar.component';

describe('DeleteFamiliarComponent', () => {
  let component: DeleteFamiliarComponent;
  let fixture: ComponentFixture<DeleteFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFamiliarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
