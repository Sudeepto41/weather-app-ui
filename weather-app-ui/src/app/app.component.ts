
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrentWeatherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

@Injectable({
  providedIn: 'root'
})

export class AppComponent {
  title = 'weather-app-ui';
}
