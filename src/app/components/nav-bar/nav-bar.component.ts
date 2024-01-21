import { Component } from '@angular/core';
import { routes } from '../../app.routes';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
  constructor(private router: Router) { }

  goTo(location:string){
    this.router.navigate([location]);
  }
}
