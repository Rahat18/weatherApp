import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { environments } from 'environments/environments';
import { Observable } from 'rxjs';
import { WeatherData } from 'src/model/weathermodel';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient) { }

  // getWeatherData(cityName : string) : Observable<WeatherData>{
  //   return this.http.get<WeatherData>(environments.weatherApiBaseUrl , {
  //     headers: new HttpHeaders()
  //     .set(environments.XRapidAPIHostHeaderName , environments.XRapidAPIHostHeaderValue)
  //     .set(environments.XRapidAPIKeyHeaderName , environments.XRapidAPIKeyHeaderValue),
  //     params: new HttpParams()
  //     .set('q' ,cityName)
  //     .set('units' , 'metric')
  //     .set('mode' , 'json')
  //   })
  // }

  getWeatherData(cityName : string) {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '48b75d1f8emsh2be0d260a9db570p1abd42jsndb61aa2b1ddb',
        'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
      }
    };
    fetch('https://forecast9.p.rapidapi.com/rapidapi/forecast/`${cityName}`/hourly/', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}
}
