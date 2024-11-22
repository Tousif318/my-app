        import { Component } from '@angular/core';
import { WeatherappService } from '../weatherapp.service';

@Component({
  selector: 'app-weatherapp',
  templateUrl: './weatherapp.component.html',
  styleUrls: ['./weatherapp.component.css']
})
export class WeatherappComponent {
weatherapp:any = [];
constructor(private _weatherservice:WeatherappService){
  _weatherservice.getWeatherapp().subscribe(
    (data:any)=>{
      this.weatherapp [0] = data;
    },
    (err:any)=>{
      alert("Internal server error")
    }
  )
}
}
