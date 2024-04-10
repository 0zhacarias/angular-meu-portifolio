import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardProjectosComponent } from './card-projectos.component';

describe('CardProjectosComponent', () => {
  let component: CardProjectosComponent;
  let fixture: ComponentFixture<CardProjectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardProjectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardProjectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
