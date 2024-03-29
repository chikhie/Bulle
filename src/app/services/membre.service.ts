import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class MembreService {
  private messageSource = new BehaviorSubject<string>("default");
  currentMessage = this.messageSource.asObservable();
  constructor() { }

  changeMessage(message:string){
    this.messageSource.next(message);
  }
}
