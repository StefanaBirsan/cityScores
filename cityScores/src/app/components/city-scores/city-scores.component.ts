import { Component, OnInit } from '@angular/core';
import { CityScoreService } from 'src/app/services/city-score.service';
import { ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-scores',
  templateUrl: './city-scores.component.html',
  styleUrls: ['./city-scores.component.css'],
})
export class CityScoresComponent implements OnInit {
  //This should help me build active links
  routerCity!: any;

  data: any = this.cityScores.data;
  color: any;
  witdth: any;
  summary!: any;
  summaryText: any = this.data['summary'];
  @ViewChild('summaryDiv')
  summaryDiv!: ElementRef;
  @ViewChild('score')
  score!: ElementRef;
  properties: any;

  constructor(
    private cityScores: CityScoreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log(this.data['summary']);

    // this.summaryText = this.data['summary'];
    console.log(this.summaryText);
    // this.summaryDiv.nativeElement.innerHTML = this.data['summary'];
    this.routerCity = this.route.snapshot.params['city'];
  }

  propertyInitialiser(categoryArg: any) {
    let categoryObject = {
      color: '',
      width: '',
    };
    if (categoryArg >= 1 && categoryArg <= 3) {
      categoryObject.color = 'red';
      categoryObject.width = `${30 * categoryArg}px`;
    } else if (categoryArg > 3 && categoryArg <= 5) {
      categoryObject.color = 'orange';
      categoryObject.width = `${30 * categoryArg}px`;
    } else if (categoryArg > 5 && categoryArg <= 7) {
      categoryObject.color = 'yellow';
      categoryObject.width = `${30 * categoryArg}px`;
    } else if (categoryArg > 7 && categoryArg <= 10) {
      categoryObject.color = 'green';
      categoryObject.width = `${30 * categoryArg}px`;
    }

    return categoryObject;
  }

  // ngAfterViewInit() {
  //   console.log(this.data);
  //   this.summaryDiv.nativeElement.innerHTML = this.data['summary'];
  // }
}
