import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import{AngularFireModule} from '@angular/fire/compat'
import { environment } from '../environments/environment.development';

@NgModule({
  imports: [
    HomeComponent,
    AppComponent,
    ConnexionComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment),
  ],
  exports:[RouterModule],
  providers:[], 
  declarations: [],
})
export class AppModule { }
