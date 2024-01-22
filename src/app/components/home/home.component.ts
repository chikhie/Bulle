import { CommonModule } from '@angular/common';
import { Component, OnInit, inject} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Firestore, collectionData } from '@angular/fire/firestore';
import { doc,addDoc, setDoc, collection, getDoc, where, query, getDocs, updateDoc, arrayUnion } from 'firebase/firestore';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule,NavBarComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  header:string = "Accueil"
  defaultDate:string ="";
  error:string = "";
  empty:string = "";
  lieu:string = "Bulle"
  players:string[] = Array(20).fill('');
  firestore:Firestore = inject(Firestore);
  
  constructor(private router: Router) { }

  acollection = collection(this.firestore,'Sessions',);
  sessionsCollectionRef = collection(this.firestore, 'Sessions');

  dates = collection(this.firestore,'ListeSessions');
  datesRef = doc(this.firestore, "/ListeSessions/SuMgtaInDPFC6vxCSNye");

  
  async ngOnInit(): Promise<void> {
    this.defaultDate = this.getNextSunday();
  }
  getNextSunday(){
    // Obtenir la date actuelle
    let currentDate = new Date();

    // Obtenir le jour de la semaine actuel (0 pour dimanche, 1 pour lundi, etc.)
    let currentDayOfWeek = currentDate.getDay();

    // Calculer le nombre de jours restants jusqu'au dimanche prochain (7 - jour actuel)
    let daysUntilNextSunday = 7 - currentDayOfWeek;

    // Cloner la date actuelle et ajouter le nombre de jours calculé
    let nextSunday = new Date(currentDate);
    nextSunday.setDate(currentDate.getDate() + daysUntilNextSunday);

    // Afficher la date du dimanche prochain au format 'yyyy-MM-dd'
    let nextSundayFormatted = nextSunday.toISOString().split('T')[0];
    return nextSundayFormatted;
  }

  create(f:NgForm){
    this.verify(f);
  }
  
  async verify(f:NgForm){
    console.log(new Date(f.value.date));
    if (f.value.date!=""&&f.value.heure!=""&&f.value.lieu!="") {
      let q = query(this.sessionsCollectionRef, where('date', '==', new Date(f.value.date)));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        addDoc(this.acollection,{
          date: new Date(f.value.date),
          status: true,
          players:this.players,
        });
        updateDoc(this.datesRef,{date:arrayUnion(new Date(f.value.date))})
        console.log("La session a été créer !");
        this.redirectToNewPage(new Date(f.value.date));
      }else{
        this.error = "Il y a déjà une session à cette date !";
        console.log("Il y a déjà une session à cette date !");
      }
    }else{
      this.error = "Veuillez remplir tout les champs svp !";
    }

  }

  redirectToNewPage(date:Date) {
    this.router.navigate(['/session',{data:date}]);
  }
}
