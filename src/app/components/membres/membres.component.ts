import { CommonModule } from '@angular/common';
import { Component, TemplateRef, OnInit,ViewChild, AfterViewInit, OnChanges, SimpleChanges, } from '@angular/core';
import { AddMembreComponent } from '../add-membre/add-membre.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-membres',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './membres.component.html',
  styleUrl: './membres.component.scss'
})
export class MembresComponent implements AfterViewInit {
  @ViewChild(AddMembreComponent) popup: any;
  names: string[] = ["Idris","Imran","Ibrahim"];
  newPlayer :any;
  constructor(private dialog: MatDialog) {
  }
  ngAfterViewInit(): void {

  }
  getNewPlayer($event: any){
    console.log($event);
    this.names.push($event);
  }

  openModal(modalTemplate: TemplateRef<any>){
    this.dialog.open(AddMembreComponent);
  }
}
