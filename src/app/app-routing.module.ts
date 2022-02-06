import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { ConfigPageComponent } from './config-page/config-page.component'

import { DaresComponent } from './dares/dares.component'
import { GamePageComponent } from './game-page/game-page.component'
import { GamesComponent } from './games/games.component'
import { ProfileComponent } from './profile/profile.component'
import { QuestionsComponent } from './questions/questions.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'dares', component: DaresComponent },
  { path: 'questions', component: QuestionsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'logout', component: ProfileComponent },
  { path: 'config', component: ConfigPageComponent },
  { path: 'game', component: GamePageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
