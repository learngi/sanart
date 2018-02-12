import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BirthdaysPage } from './birthdays';
import {ComponentsModule} from '../../components/components.module'
@NgModule({
  declarations: [
    BirthdaysPage,
  ],
  imports: [
    IonicPageModule.forChild(BirthdaysPage),
    ComponentsModule
  ],
})
export class BirthdaysPageModule {}
