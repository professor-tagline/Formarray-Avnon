import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionsComponent } from './components/questions/questions.component';
import { VerifyAnswerComponent } from './components/verify-answer/verify-answer.component';

const routes: Routes = [
  {
    path: 'form/builder',
    component: QuestionsComponent
  },
  {
    path: 'form/answers/:id',
    component: VerifyAnswerComponent
  },
  {
    path: '**',
    redirectTo: 'form/builder'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
