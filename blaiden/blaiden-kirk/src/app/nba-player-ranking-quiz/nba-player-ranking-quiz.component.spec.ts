import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NBAPlayerRankingQuizComponent } from './nba-player-ranking-quiz.component';

describe('NbaPlayerRankingQuizComponent', () => {
  let component: NBAPlayerRankingQuizComponent;
  let fixture: ComponentFixture<NBAPlayerRankingQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NBAPlayerRankingQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NBAPlayerRankingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
