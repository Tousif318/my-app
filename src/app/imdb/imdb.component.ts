import { Component } from '@angular/core';
import { ImdbService } from '../imdb.service';

@Component({
  selector: 'app-imdb',
  templateUrl: './imdb.component.html',
  styleUrls: ['./imdb.component.css']
})
export class ImdbComponent {

  imdb:any = [];
  constructor(private _imdbservice:ImdbService){
    _imdbservice.getimdb().subscribe(
      (data:any)=>{
        this.imdb  =data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  getimdb(rating:any){
    return (Math.floor(rating))
  }
}
