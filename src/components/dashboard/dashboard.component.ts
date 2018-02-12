import { Component,OnInit } from '@angular/core';
import {NavController} from 'ionic-angular'
/**
 * Generated class for the DashboardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  text: string;

  constructor(private navCtrl:NavController) {
    console.log('Hello DashboardComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit(){

  }
  birthday(){
this.navCtrl.push('BirthdaysPage')
  }
}
