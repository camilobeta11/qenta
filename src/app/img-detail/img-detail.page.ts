import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { img } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';

@Component({
  selector: 'app-img-detail',
  templateUrl: './img-detail.page.html',
  styleUrls: ['./img-detail.page.scss'],
})
export class ImgDetailPage implements OnInit {

  @Input() largeImageURL;

  data : img [] = [] ;
  constructor( private dataLocal: DataLocalService,
               private modalCtrl: ModalController) { }

  async ngOnInit() {
    console.log(this.largeImageURL);
    this.dataLocal.save( this.largeImageURL )
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
