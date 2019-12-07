import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ChartComponent } from './charts/chart.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { MaterialModule } from './material.module';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';
import { WithDrawComponent } from './with-draw/with-draw.component';
import { MatDialogModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    ChartComponent,
    SearchResultsComponent,
    AlertDialogComponent,
    WithDrawComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ChartsModule,
    MaterialModule,
    MatDialogModule
  ],
  entryComponents: [AlertDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
