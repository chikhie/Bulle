import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Firestore, collectionCount, collectionData, doc, getDocs, query } from '@angular/fire/firestore';
import { addDoc,collection, getDoc, updateDoc, where } from 'firebase/firestore';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
@Component({
  selector: 'app-home-session',
  standalone: true,
  imports: [CommonModule,FormsModule,NavBarComponent],
  templateUrl: './home-session.component.html',
  styleUrl: './home-session.component.scss'
})

export class HomeSessionComponent implements OnInit{

  firestore:Firestore = inject(Firestore);
  session$ = collectionData(collection(this.firestore,'Session'));
  players: string[] = [];
   constructor(private router: Router){}
  async ngOnInit(): Promise<void> {
    const q = query(collection(this.firestore, 'Sessions'), where('status', '==', true));
    const querySnapshot = await getDocs(q);

    const docRef = doc(this.firestore,'Sessions',querySnapshot.docs[0].id);
    this.players = (await (getDoc(docRef))).get('players');
  }
  send(f:NgForm){
    Object.keys(f.controls).forEach(controlName => {
      const control = f.controls[controlName];
      this.players.push(control.value);
      
    });
  }
  async close(){
    const q = query(collection(this.firestore, 'Sessions'), where('status', '==', true));
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot.docs);
    const docRef = doc(this.firestore,'Sessions',querySnapshot.docs[0].id);

    updateDoc(docRef,{
      status: false,
    });
    this.router.navigate(['/home']);

  }
  // saveData(){
  //   const acollection = collection(this.firestore,'Sessions','14/01/20');
  //   addDoc(acollection,{
  //     players: this.players,
  //   });
  // }

  async update(){
    const q = query(collection(this.firestore, 'Sessions'), where('status', '==', true));
    const querySnapshot = await getDocs(q);

    const docRef = doc(this.firestore,'Sessions',querySnapshot.docs[0].id);
    //console.log((await (getDoc(docRef))).get('players'));

    updateDoc(docRef,{
      players: this.players,
    });
  }
}
