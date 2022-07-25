import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CityScoresComponent } from './components/city-scores/city-scores.component';
import { HomeComponent } from './components/home/home.component';
import { RangebarComponent } from './components/rangebar/rangebar.component';

@NgModule({
  declarations: [
    AppComponent,
    CityScoresComponent,
    HomeComponent,
    RangebarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
