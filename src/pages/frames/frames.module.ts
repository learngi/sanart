import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FramesPage } from './frames';

@NgModule({
  declarations: [
    FramesPage,
  ],
  imports: [
    IonicPageModule.forChild(FramesPage),
  ],
})
export class FramesPageModule {}
