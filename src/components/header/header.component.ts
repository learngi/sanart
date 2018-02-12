import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular'
/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent implements OnInit {

  text: string;

  constructor(private navCtrl: NavController) {
    console.log('Hello HeaderComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit() {

  }
  login() {
    console.log('here')
    this.navCtrl.push('LoginPage')
  }
}
