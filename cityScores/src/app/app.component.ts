import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityScoreService } from './services/city-score.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cityScores';
  constructor(private cityScores: CityScoreService) {}
  ngOnInit() {
    this.cityScores
      .callCityAPI()
      .subscribe((data) => this.cityScores.saveCities(data));
  }
}
