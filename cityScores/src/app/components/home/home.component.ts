import { Component, OnInit } from '@angular/core';
import { CityScoreService } from 'src/app/services/city-score.service';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  data = this.cityScores.data;
  error: string = '';
  done: boolean = false;
  cities: any;
  text: any;
  filtered: boolean = false;
  resultAfterFiltering!: any;
  response: boolean = false;
  routerLinkReady: boolean = false;

  filter() {
    this.filtered = true;

    this.cityScores.updateFilter(this.filtered, this.text);
    console.log(this.cities);
    console.log(this.cities.filter((el: any) => el.name === 'London'));
    this.resultAfterFiltering = this.cities.filter((el: any) =>
      el.name.toLowerCase().includes(this.text.toLowerCase())
    );
    console.log(this.resultAfterFiltering);
  }
  callScoresAPI(city: any) {
    this.cityScores
      .callCityScoresAPI(city)

      .subscribe({
        next: (data) => {
          this.cityScores.saveArray(data);
        },
        error: (error) => (this.error = error),
      });
    this.routerLinkReady = true;
    this.done = true;
    console.log(this.cityScores.filtered);
  }

  callCityAPI() {
    this.filtered = false;
    this.cities = this.cityScores.city['_links']['ua:item'];
    console.log(this.cities);
  }
  constructor(private cityScores: CityScoreService) {}

  ngOnInit(): void {}
}
