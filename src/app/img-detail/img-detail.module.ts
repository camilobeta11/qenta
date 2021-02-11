import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImgDetailPageRoutingModule } from './img-detail-routing.module';

import { ImgDetailPage } from './img-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImgDetailPageRoutingModule
  ],
  declarations: [ImgDetailPage]
})
export class ImgDetailPageModule {}
