import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Firestore, collectionData, doc, getDocs, query } from '@angular/fire/firestore';
import { collection, getDoc, updateDoc, where } from 'firebase/firestore';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
@Component({
  selector: 'app-home-session',
  standalone: true,
  imports: [CommonModule,FormsModule,NavBarComponent,HeaderComponent],
  templateUrl: './home-session.component.html',
  styleUrl: './home-session.component.scss'
})

export class HomeSessionComponent implements OnInit{
  header:string = "session";
  firestore:Firestore = inject(Firestore);
  session$ = collectionData(collection(this.firestore,'Session'));
  players: string[] = [];
  receivedData = new Date(this.route.snapshot.paramMap.get('data')!);
  
  constructor(private router: Router,public route: ActivatedRoute){}
  async ngOnInit(): Promise<void> {
    console.log(this.receivedData);

    let q:any;
    q = query(collection(this.firestore, 'Sessions'), where('date', '==', this.receivedData));

    const querySnapshot = (await getDocs(q));
    const docRef = doc(this.firestore,'Sessions',querySnapshot.docs[0].id);
    this.players = (await (getDoc(docRef))).get('players');
  }
  send(f:NgForm){
    Object.keys(f.controls).forEach(controlName => {
      const control = f.controls[controlName];
      this.players.push(control.value);
      
    });
  }

  async update(){
    let q:any;
    q = query(collection(this.firestore, 'Sessions'), where('date', '==', this.receivedData));
 
    const querySnapshot = await getDocs(q);

    const docRef = doc(this.firestore,'Sessions',querySnapshot.docs[0].id);

    updateDoc(docRef,{
      players: this.players,
    });
  }
}
