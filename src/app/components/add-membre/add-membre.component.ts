// add-membre.component.ts
import { Component, Inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { addDoc, collection} from "firebase/firestore"; 
import { Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import{AngularFirestore}from '@angular/fire/compat/firestore';
import { MatDialog, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-membre',
  standalone: true,
  styleUrls: ['./add-membre.component.scss'],
  templateUrl: './add-membre.component.html',
  imports: [CommonModule,FormsModule],
})
export class AddMembreComponent implements OnInit {
  nom: any;
  message!: string;
  formulaire = new FormsModule();
  constructor(
    private firestore:Firestore,
    private data:DataService,
    private afs : AngularFirestore,
    public dialogRef: MatDialogRef<AddMembreComponent>,
   ){}
  
   saveData(){
    const url = ""
  }

  ngOnInit(): void {
  }
  onTest(){
    console.log("ça marche");
  }
  onSubmit(f:any): void {
    const  collectionInstance = collection(this.firestore, 'users');
    addDoc(collectionInstance, f.value)
    .then(()=>{
      console.log('Data Saved Successfully');
    })
    .catch((err)=>{
      console.log(err);
    })
  }

}
