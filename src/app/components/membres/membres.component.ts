import { CommonModule } from '@angular/common';
import { Component, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { addDoc,collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

interface Membres{
  nom:string,
  prenom:string,
  phone:string,
}
@Component({
  selector: 'app-membres',
  standalone: true,
  imports: [CommonModule,FormsModule,NavBarComponent],
  templateUrl: './membres.component.html',
  styleUrl: './membres.component.scss'
})


export class MembresComponent{
  membre : any;
  firestore:Firestore = inject(Firestore);
  membres$ = collectionData(collection(this.firestore,'Membres')) as Observable<Membres[]>;
  
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
      'pseudo' : this.membre.value.pseudo,
    });
  }
}
