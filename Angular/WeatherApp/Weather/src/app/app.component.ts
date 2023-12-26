import { Component } from '@angular/core';
import { CommonService } from './common.service';
declare var $ : any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather';
  IsChangeLocation= false;
  TodayDate: Date;
  weatherData: any;
  cityName: any;

  constructor(private service: CommonService){
    this.TodayDate = new Date();
  }

  changeLocation(){
    this.IsChangeLocation = this.IsChangeLocation ==true?false:true;
  }

  getWeatherDataByCity(){
    var city = $('#CityName').val();
    this.service.getWeatherData(city).subscribe(data=>{
      this.cityName = city;
      console.log('data',data)
      this.weatherData = data;
    })
  }
  transform(value:number):number {
    return Math.round(value);
  }
}
