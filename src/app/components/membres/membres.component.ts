import { CommonModule } from '@angular/common';
import { Component, OnInit, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc,collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';
import { map } from 'rxjs/operators';

interface Membres{
  nom:string,
  prenom:string,
  phone:string,
}
@Component({
  selector: 'app-membres',
  standalone: true,
  imports: [CommonModule,FormsModule,NavBarComponent,HeaderComponent],
  templateUrl: './membres.component.html',
  styleUrl: './membres.component.scss'
})


export class MembresComponent implements OnInit{

  membre : any;
  firestore:Firestore = inject(Firestore);
  membres$ = collectionData(collection(this.firestore,'Membres')) as Observable<Membres[]>;
  ListedMembres:any[] = [];
  header:string = "Membres";
  ngOnInit(): void {
    this.membres$.pipe(
      map(membres => membres.sort((a, b) => a.nom.localeCompare(b.nom)))
    ).subscribe(sortedMembres => {
      this.ListedMembres = sortedMembres;
    });
  }
  send(f:NgForm){
    this.membre = f;
    this.saveData();
    f.reset();
  }
  saveData(){
    const acollection = collection(this.firestore,'Membres');
    addDoc(acollection,{
      'nom' : this.membre.value.nom,
      'prenom' : this.membre.value.prenom,
      'phone' : this.membre.value.phone,
    });
  }
}
