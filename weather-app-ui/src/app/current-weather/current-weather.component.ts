import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PolutantComponent } from '../polutant/polutant.component';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [PolutantComponent,],
  templateUrl: './current-weather.component.html',
  styleUrl: './current-weather.component.css'
})
export class CurrentWeatherComponent {
  baseUrl:string = "http://127.0.0.1:8000/getweather/";
  public data: any;

    constructor(private httpClient : HttpClient) {}

    ngOnInit(): void {
      this.getWeather("mumbai")
    }
    public getWeather(city: string){
      this.httpClient.get(this.baseUrl, { params: new HttpParams().set('city', city) }).subscribe(
        (resp: any)=>{
          console.log(resp)
          this.data = resp
        }
      );
    }
}
