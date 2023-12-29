import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { AppComponent } from './app.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ɵBrowserAnimationBuilder } from '@angular/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { AddMembreComponent } from './components/add-membre/add-membre.component';
const routes: Routes = [
  {path:'', component: ConnexionComponent},
  {path:'home', component: HomeComponent},
  {path:'connexion', component: ConnexionComponent},

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeComponent,
    AppComponent,
    ConnexionComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
  exports:[RouterModule],
  providers:[], 
  declarations: [ AddMembreComponent],
})
export class AppModule { }
