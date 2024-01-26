import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomeSessionComponent } from './components/home-session/home-session.component';
import { MembresComponent } from './components/membres/membres.component';
import { PaiementComponent } from './components/paiement/paiement.component';
import { ListeSessionsComponent } from './components/liste-sessions/liste-sessions.component';
export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'home', component: HomeComponent},
    {path:'session', component: HomeSessionComponent},
    {path:'membres', component: MembresComponent},
    {path:'paiement', component: PaiementComponent},
    {path:'listeSession', component: ListeSessionsComponent},


];
