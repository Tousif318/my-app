import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmazonService {

  constructor(private _httpClient:HttpClient) { }
  getAmazons():Observable<any>{
    return this._httpClient.get("https://fakestoreapi.com/products")
  }
}
