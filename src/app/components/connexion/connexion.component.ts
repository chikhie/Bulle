import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})

export class ConnexionComponent implements OnInit{
  form: FormGroup;
  pseudo = '';
  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      Pseudo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Vous pouvez réagir aux changements dans le formulaire réactif ici
    this.form.valueChanges.subscribe(value => {
      console.log(value.Pseudo); // Cela affichera la valeur de Pseudo en temps réel
    });
  }
  onSubmit(){

  }

  redirect() {
    this.router.navigate(['/home']);
  }
}
