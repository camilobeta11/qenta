import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ImgDetailPage } from './img-detail.page';

const routes: Routes = [
  {
    path: '',
    component: ImgDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ImgDetailPageRoutingModule {}
