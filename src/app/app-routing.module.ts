import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from "./menu/menu.component";
import {GameComponent} from "./game/game.component";
import {ActionsComponent} from "./actions/actions.component";
import {QuestionsComponent} from "./questions/questions.component";

const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'game',
    component: GameComponent
  },
  {
    path: 'actions',
    component: ActionsComponent
  },
  {
    path: 'questions',
    component: QuestionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
