import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import {
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher,
} from '@angular/material/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';

import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app-routing.module'
import { AuthModule } from './auth/auth.module'
import { DaresComponent } from './dares/dares.component';
import { GamesComponent } from './games/games.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { ProfileComponent } from './profile/profile.component'
import { QuestionsComponent } from './questions/questions.component';
import { environment } from 'src/environments/environment';
import { QuestionsDialogComponent } from './shared/components/questions-dialog/questions-dialog.component';
import { GamesDialogComponent } from './shared/components/games-dialog/games-dialog.component';
import { SharedDialogComponent } from './shared/components/shared-dialog/shared-dialog.component'
import { MatSelectModule } from '@angular/material/select'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DaresComponent,
    QuestionsComponent,
    GamesComponent,
    ProfileComponent,
    QuestionsDialogComponent,
    GamesDialogComponent,
    SharedDialogComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    MatSelectModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
