import { Injectable } from '@angular/core';
import{AngularFirestore}from '@angular/fire/compat/firestore'

@Injectable({
  providedIn: 'root'
})
interface Membre{
  id:string,
  nom:string,
  prenom:string,
  phone:string
}
export class DataService {

   constructor(private afs : AngularFirestore) { }

   addMember(membre : Membre){
      membre.id = this.afs.createId();
   }
}
