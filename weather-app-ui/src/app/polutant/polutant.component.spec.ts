import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolutantComponent } from './polutant.component';

describe('PolutantComponent', () => {
  let component: PolutantComponent;
  let fixture: ComponentFixture<PolutantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolutantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolutantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
