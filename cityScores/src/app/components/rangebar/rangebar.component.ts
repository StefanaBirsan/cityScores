import { Component, OnInit } from '@angular/core';
import { CityScoreService } from 'src/app/services/city-score.service';
import { Input } from '@angular/core';

@Component({
  selector: 'app-rangebar',
  templateUrl: './rangebar.component.html',
  styleUrls: ['./rangebar.component.css'],
})
export class RangebarComponent implements OnInit {
  data = this.cityScores.data;
  width: any;
  color: any;
  widthLiving: any;
  colorLiving: any;

  @Input() properties: any = {
    color: '',
    width: '',
  };
  constructor(private cityScores: CityScoreService) {}

  ngOnInit(): void {
    this.color = this.cityScores.color;
    this.width = `${this.cityScores.width}px`;
    this.colorLiving = this.cityScores.colorLiving;
    this.widthLiving = `${this.cityScores.width}px`;
  }
}
