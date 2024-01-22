import { HeaderComponent } from './../header/header.component';
import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-paiement',
  standalone: true,
  imports: [NavBarComponent,HeaderComponent],
  templateUrl: './paiement.component.html',
  styleUrl: './paiement.component.scss'
})
export class PaiementComponent {
  header:string = "Paiements";
}
