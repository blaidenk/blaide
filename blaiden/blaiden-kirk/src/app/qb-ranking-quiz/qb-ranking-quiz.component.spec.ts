import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QbRankingQuizComponent } from './qb-ranking-quiz.component';

describe('QbRankingQuizComponent', () => {
  let component: QbRankingQuizComponent;
  let fixture: ComponentFixture<QbRankingQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QbRankingQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QbRankingQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
