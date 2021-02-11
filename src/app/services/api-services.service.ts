import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RespApi } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {

  constructor( private http: HttpClient) { }
  
  getPixabay() {
    return this.http.get<RespApi>(`https://pixabay.com/api/?key=20232122-058c1dc151be4a5699860d450&q=yellow+flowers&image_type=photo`)   
  }
}