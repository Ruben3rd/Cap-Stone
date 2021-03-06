import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataServiceService } from './services/data-service.service';
import { HttpClientModule } from '@angular/common/http'; 
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular material
import { AngularMaterialModule } from './angular-material/angular-material.module';

// App Components
import { DisplayModule } from './pages/display/display.module';
import { MapModule } from './components/map/map.module';
import { HomeModule } from './pages/home/home.module';
import { StatisticsModule } from './pages/statistics/statistics.module';
import { OnBoardingModule } from './pages/on-boarding/on-boarding.module';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    DisplayModule,
    MapModule,
    HomeModule,
    StatisticsModule,
    OnBoardingModule,
    LoginModule,
    RegisterModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
