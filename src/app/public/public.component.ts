import { Component } from '@angular/core';
import * as firebase from "firebase";

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent {
  //local user var
  private user;

  constructor() {}

  ngDoCheck() {
    //sets local user var to currentUser on firebase
    //the user on firebase is created by calling createUserWithEmailAndPassword method, or from the firebase console, which we haven't done... yet
    this.user = firebase.auth().currentUser;
    console.log(this.user);
  }
}
