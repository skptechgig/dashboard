import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartComponent } from './charts/chart.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { WithDrawComponent } from './with-draw/with-draw.component';

const routes: Routes = [
  { path: '', component: ChartComponent },
  { path:'manage', component: SearchResultsComponent },
  { path:'withdraw', component: WithDrawComponent },
  { path:'certify', component: SearchResultsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
