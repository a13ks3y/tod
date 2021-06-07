import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameComponent } from './game.component';

describe('GameComponent', () => {
  let component: GameComponent;
  let fixture: ComponentFixture<GameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should has player names input set', () => {
    const inputEl = fixture.nativeElement.querySelector('input[type=text]');
    expect(inputEl).toBeTruthy();
  });
  it('should has player names list', () => {
    const playerNameElements = fixture.nativeElement.querySelectorAll('.player-name');
    expect(playerNameElements.length).toBeGreaterThan(0);
  });
  it('should start the game with first question', () => {

  });
});
