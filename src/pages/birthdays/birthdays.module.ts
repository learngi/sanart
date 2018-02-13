import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BirthdaysPage } from './birthdays';
import {ComponentsModule} from '../../components/components.module'
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    BirthdaysPage,
  ],
  imports: [
    IonicImageViewerModule,
    IonicPageModule.forChild(BirthdaysPage),
    ComponentsModule
  ],
})
export class BirthdaysPageModule {}
