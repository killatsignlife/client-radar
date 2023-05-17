import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFamiliarComponent } from './list-familiar.component';

describe('ListFamiliarComponent', () => {
  let component: ListFamiliarComponent;
  let fixture: ComponentFixture<ListFamiliarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFamiliarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFamiliarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
