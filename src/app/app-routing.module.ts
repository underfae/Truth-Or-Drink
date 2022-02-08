import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard'
import { ConfigPageComponent } from './config-page/config-page.component'
import { DaresComponent } from './dares/dares.component'
import { GamePageComponent } from './game-page/game-page.component'
import { GamesComponent } from './games/games.component'
import { ProfileComponent } from './profile/profile.component'
import { QuestionsComponent } from './questions/questions.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { CustomGameComponent } from './custom-game/custom-game.component'

const redirectUnauthorized = () => redirectUnauthorizedTo(['/auth'])
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'auth' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing.module').then((m) => m.AuthRoutingModule),
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorized,
    },
  },
  {
    path: 'dares',
    component: DaresComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorized,
    },
  },
  {
    path: 'questions',
    component: QuestionsComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorized,
    },
  },
  {
    path: 'games',
    component: GamesComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorized,
    },
  },
  { path: 'logout', component: ProfileComponent },
  { path: 'config', component: ConfigPageComponent },
  { path: 'game', component: GamePageComponent },
  {
    path: 'custom-game',
    component: CustomGameComponent,
    canActivate: [AngularFireAuthGuard],
    data: {
      authGuardPipe: redirectUnauthorized,
    },
  },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
