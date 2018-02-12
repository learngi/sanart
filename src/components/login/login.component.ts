import { Component ,OnInit} from '@angular/core';
import {NavController} from 'ionic-angular'
/**
 * Generated class for the LoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {

  text: string;

  constructor(private navCtrl:NavController) {
    console.log('Hello LoginComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit(){

  }

  save(){
this.navCtrl.setRoot('DashboardPage')
  }

}
