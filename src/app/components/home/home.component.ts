import { CommonModule } from '@angular/common';
import { Component, OnInit, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { doc,addDoc, setDoc, collection, getDoc, where, query, getDocs } from 'firebase/firestore';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,NavBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

  players:string[] = Array(20).fill('');
  firestore:Firestore = inject(Firestore);
  
  constructor(private router: Router) { }

  acollection = collection(this.firestore,'Sessions',);
  sessionsCollectionRef = collection(this.firestore, 'Sessions');
  
  async ngOnInit(): Promise<void> {
    const q = query(collection(this.firestore, 'Sessions'), where('status', '==', true));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length != 0) {
      this.router.navigate(['/session']);
    }
  }

  create(f:NgForm){
    this.verify(f);
  }
  
  async verify(f:NgForm){
    let q = query(this.sessionsCollectionRef, where('date', '==', f.value.date));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.empty);

    if (querySnapshot.empty) {
      addDoc(this.acollection,{
        date: f.value.date,
        status: true,
        players:this.players,
      });
      console.log("La session a été créer !");
      this.redirectToNewPage();
    }else{
      console.log("Il y a déjà une session à cette date !");
    }
  }

  redirectToNewPage() {
    this.router.navigate(['/session']);
  }
}
