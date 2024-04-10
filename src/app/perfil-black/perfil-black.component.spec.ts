import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilBlackComponent } from './perfil-black.component';

describe('PerfilBlackComponent', () => {
  let component: PerfilBlackComponent;
  let fixture: ComponentFixture<PerfilBlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilBlackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilBlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
