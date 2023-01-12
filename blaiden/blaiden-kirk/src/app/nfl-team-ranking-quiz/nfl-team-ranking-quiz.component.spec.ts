import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NflTeamRankingQuizComponent } from './nfl-team-ranking-quiz.component';

describe('NflTeamRankingQuizComponent', () => {
  let component: NflTeamRankingQuizComponent;
  let fixture: ComponentFixture<NflTeamRankingQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NflTeamRankingQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NflTeamRankingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
