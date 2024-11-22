import { Component } from '@angular/core';
import { AmazonService } from '../amazon.service';

@Component({
  selector: 'app-amazon',
  templateUrl: './amazon.component.html',
  styleUrls: ['./amazon.component.css']
})
export class AmazonComponent {
amazon:any = [];
constructor(private _amazonservice:AmazonService){
  _amazonservice.getAmazons().subscribe(
    (data:any)=>{
      this.amazon = data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
}
}
