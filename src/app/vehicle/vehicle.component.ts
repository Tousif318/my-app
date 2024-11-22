import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent {
  vehicles:any = [];
  
  

  constructor(private _ServiceService:ServiceService){
    _ServiceService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  term:string = "";
  
  filter(){
    this._ServiceService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
    this.vehicles = data;
  },
  (err:any)=>{
    alert("Internal server error");
  }
)
  }

  column:string ="";
  order:string = "";

  sort(){
    this._ServiceService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
delete(id:string){
  this._ServiceService.deleteVehicle(id).subscribe(
    (data:any)=>{
      alert("Deleted Sucessfully!!!!");
      location.reload();
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}
limit:number = 0;
page:number= 0;

pagination(){
  this._ServiceService.getPagedVehicles(this.limit,this.page).subscribe(
    (data:any)=>{
      this.vehicles = data;
    },
    (err:any)=>{
      alert("Internal server error");
    }
  )
}

}
