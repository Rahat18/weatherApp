import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/model/weathermodel';
import { AuthServiceService } from './services/auth-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'weatherApp';

  constructor(private weatherService : AuthServiceService){}

  weatherData: WeatherData | undefined
  cityName: string ='Kolkata'
  
  ngOnInit(): void{
    this.getWeatherData(this.cityName);
    this.cityName=''
  }
  onSubmit(){
    this.getWeatherData(this.cityName);
    this.cityName = '' ;

  }
  private getWeatherData(cityName: string){
    this.weatherService.getWeatherData(cityName)
  //   .subscribe({
  //     next: (response) => {
  //       this.weatherData= response
  //       console.log(response);
  //     }
  //   })
    
  // }
}
}
