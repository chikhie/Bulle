import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Firestore, collectionData, doc, getDocs, query } from '@angular/fire/firestore';
import { collection, getDoc, updateDoc, where } from 'firebase/firestore';
import { Router } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ActivatedRoute } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home-session',
  standalone: true,
  imports: [CommonModule,FormsModule,NavBarComponent,HeaderComponent,CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './home-session.component.html',
  styleUrl: './home-session.component.scss'
})

export class HomeSessionComponent implements OnInit{
  equipe1:any=0;
  equipe2:any=5;
  equipe3:any=10;
  equipe4:any=15;
  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  header:string = "session";
  firestore:Firestore = inject(Firestore);
  session$ = collectionData(collection(this.firestore,'Session'));
  players: string[] = [];
  receivedData = new Date(this.route.snapshot.paramMap.get('data')!);
  isDropListDisabled = false;
  constructor(public route: ActivatedRoute){}
  
  async ngOnInit(): Promise<void> {
    let q:any;
    q = query(collection(this.firestore, 'Sessions'), where('date', '==', this.receivedData));

    const querySnapshot = (await getDocs(q));
    const docRef = doc(this.firestore,'Sessions',querySnapshot.docs[0].id);
    this.players = (await (getDoc(docRef))).get('players');
  }

  async update(j:number){
    console.log(this.players[j])
    let q:any;
    q = query(collection(this.firestore, 'Sessions'), where('date', '==', this.receivedData));
 
    const querySnapshot = await getDocs(q);

    const docRef = doc(this.firestore,'Sessions',querySnapshot.docs[0].id);
    // console.log(this.players)
    // console.log("ça marche")
    updateDoc(docRef,{
      players: this.players,
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    
    const target:number = parseInt(event.currentIndex + event.container.id);
    const origin:number = parseInt(event.previousIndex + event.previousContainer.id);
    this.isDropListDisabled = true;


    this.swapValues(target, origin);

    setTimeout(() => {
      this.isDropListDisabled = false;
    }, 1);

    console.log('Conteneur:', event.previousContainer.id);
    console.log('Indice origine:', origin);

    console.log('Conteneur:', event.container.id);
    console.log('Indice cible:', target);

    this.update(0)
  }
  swapValues( index1: number, index2: number): void {
    // Vérifiez que les indices sont valides
    if (index1 < 0 || index1 >= this.players.length || index2 < 0 || index2 >= this.players.length) {
      console.error('Indices invalides');
      return;
    }
  
    // Effectuez l'échange des valeurs
    const temp = this.players[index1];
    this.players[index1] = this.players[index2];
    this.players[index2] = temp;
  }
}
