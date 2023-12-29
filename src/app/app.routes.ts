import { Routes } from '@angular/router';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { HomeComponent } from './components/home/home.component';
import { HomeSessionComponent } from './components/home-session/home-session.component';
import { MembresComponent } from './components/membres/membres.component';
export const routes: Routes = [
    {path:'', component: MembresComponent},
    {path:'home', component: HomeComponent},
    {path:'connexion', component: ConnexionComponent},
];
