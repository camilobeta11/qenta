import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { img, dataFronEnd } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  dataPosts: dataFronEnd [] = [] ;

  imgs: img [] = [] ;

  constructor( private storage: Storage) { }

  save( user) {

    this.dataPosts.push( user );
    this.storage.set('dataStorage', this.dataPosts );

  }
  saveImg( largeImageURL ) {

    this.imgs.push( largeImageURL );
    this.storage.set('img', this.imgs);

  }
}
