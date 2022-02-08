import { AngularFireModule } from '@angular/fire'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatTableModule } from '@angular/material/table'
import { MatFormFieldModule } from '@angular/material/form-field'

import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { NgModule } from '@angular/core'
import { MatDialogModule } from '@angular/material/dialog'
import { MatRadioModule } from '@angular/material/radio'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AuthModule } from './auth/auth.module'
import { ConfigPageComponent } from './config-page/config-page.component'
import { DaresComponent } from './dares/dares.component'
import { GamePageComponent } from './game-page/game-page.component'
import { GamesComponent } from './games/games.component'
import { HeaderComponent } from './shared/components/header/header.component'
import { ProfileComponent } from './profile/profile.component'
import { QuestionsComponent } from './questions/questions.component'
import { RulesComponent } from './shared/components/rules/rules.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { SharedDialogComponent } from './shared/components/shared-dialog/shared-dialog.component'
import { environment } from 'src/environments/environment'

import {
  AngularFireAuthModule,
  USE_EMULATOR as USE_AUTH_EMULATOR,
} from '@angular/fire/auth'
import {
  AngularFirestoreModule,
  USE_EMULATOR as USE_FIRESTORE_EMULATOR,
} from '@angular/fire/firestore'
import {
  AngularFireFunctionsModule,
  USE_EMULATOR as USE_FUNCTIONS_EMULATOR,
} from '@angular/fire/functions';
import { CustomGameComponent } from './custom-game/custom-game.component'
@NgModule({
  declarations: [
    AppComponent,
    AppComponent,
    ConfigPageComponent,
    DaresComponent,
    DaresComponent,
    GamePageComponent,
    GamesComponent,
    GamesComponent,
    HeaderComponent,
    HeaderComponent,
    ProfileComponent,
    ProfileComponent,
    QuestionsComponent,
    QuestionsComponent,
    PageNotFoundComponent,
    RulesComponent,
    SharedDialogComponent,
    CustomGameComponent,
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireFunctionsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFirestoreModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDialogModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatPaginatorModule,
    MatRadioModule,
    MatSelectModule,
    MatSelectModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    {
      provide: USE_AUTH_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 9099] : undefined,
    },
    {
      provide: USE_FIRESTORE_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 8088] : undefined,
    },
    {
      provide: USE_FUNCTIONS_EMULATOR,
      useValue: environment.useEmulators ? ['localhost', 5001] : undefined,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
