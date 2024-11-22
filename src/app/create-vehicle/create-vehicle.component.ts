import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {

  constructor(private _Serviceservice:ServiceService){}
    public vehicleform:FormGroup = new FormGroup(
      {
        vehicle: new FormControl(),
        manufacturer: new FormControl(),
        model: new FormControl(),
        type: new FormControl(),
        fuel: new FormControl(),
        color: new FormControl(),
        image: new FormControl(),
        cost: new FormControl(),
      },
    );
  
    Submit(){
      console.log(this.vehicleform);
      this._Serviceservice.createVehicle(this.vehicleform.value).subscribe(
        (data:any)=>{
          alert("created sucessfully!!!");
        },
        (err:any)=>{
          alert("creation Failed");
        }
      )
    }
  }
  


