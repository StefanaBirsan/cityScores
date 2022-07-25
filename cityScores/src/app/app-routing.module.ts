import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CityScoresComponent } from './components/city-scores/city-scores.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cityScores',
    component: CityScoresComponent,
  },
  {
    path: 'home/cityScores',
    redirectTo: 'cityScores',
    pathMatch: 'full',
  },
  {
    path: 'cities/:city',
    component: CityScoresComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
