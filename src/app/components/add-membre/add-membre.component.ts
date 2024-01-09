// add-membre.component.ts
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembreService } from '../../services/membre.service';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../../services/data.service';
import{AngularFirestore}from '@angular/fire/compat/firestore'


@Component({
  selector: 'app-add-membre',
  standalone: true,
  styleUrls: ['./add-membre.component.scss'],
  templateUrl: './add-membre.component.html',
  imports: [CommonModule],
})
export class AddMembreComponent implements OnInit {
  nom: any;
  message!: string;

  saveData(){
    const url = ""
  }
  constructor(
    private membre:MembreService, 
    private data:DataService,
    private afs : AngularFirestore){
  }

  ngOnInit(): void {
    this.membre.currentMessage.subscribe(message=>this.message = message)
  }

  onSubmit(): void {
    this.afs.createId()

  }

}
