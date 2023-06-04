import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManutenirJogoComponent } from './manutenir-jogo.component';

describe('ManutenirJogoComponent', () => {
  let component: ManutenirJogoComponent;
  let fixture: ComponentFixture<ManutenirJogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManutenirJogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManutenirJogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
