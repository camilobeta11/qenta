import { Component, OnInit } from '@angular/core';
import { ApiServicesService } from '../services/api-services.service';
import { Hit } from '../interfaces/interfaces';
import { DataLocalService } from '../services/data-local.service';
import { ModalController } from '@ionic/angular';
import { ImgDetailPage } from '../img-detail/img-detail.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  dataPosts: Hit [] = [] ;

  textSearch = '';

  constructor( private apiService: ApiServicesService,
               private dataLocal: DataLocalService,
               private modalCtrl: ModalController) {}

  ngOnInit() {
    this.apiService.getPixabay()
      .subscribe( resp => {
        console.log('api', resp);
        this.dataPosts.push(...resp.hits) 
      });
      this.dataLocal.save( this.dataPosts );
  }

  search( event ) {
    event.detail.value;
  }

  async detailImg( largeImageURL: string) {

    const modal = this.modalCtrl.create({
      component: ImgDetailPage,
      componentProps: {
        largeImageURL
      }
    });

    (await modal).present();

  }
}
