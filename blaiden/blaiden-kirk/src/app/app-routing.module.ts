import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppUiModule } from './app-ui.module';
import { NBAPlayerRankingQuizComponent } from './nba-player-ranking-quiz/nba-player-ranking-quiz.component';
import { QbRankingQuizComponent } from './qb-ranking-quiz/qb-ranking-quiz.component';
import { TemplateComponent } from './template/template.component';

const routes: Routes = [
  {
    path: 'home',
    component: TemplateComponent
  },
  {
    path: 'qb-ranking-quiz',
    component: QbRankingQuizComponent
  },
  {
    path: 'nba-player-ranking-quiz',
    component: NBAPlayerRankingQuizComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AppUiModule,
  ],
  exports: [
    RouterModule,
    AppUiModule,
  ]
})
export class AppRoutingModule {
  
}
