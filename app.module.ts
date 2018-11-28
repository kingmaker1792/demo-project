import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { CalculatorComponentComponent } from './calculator-component/calculator-component.component';
import { PageNotFondComponentComponent } from './page-not-fond-component/page-not-fond-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';

const routes: Routes = [];

const appRoutes: Routes = [

  {
    path: 'home',
    component: HomeComponentComponent
    
  },
  {
    path: 'calculator',
    component: CalculatorComponentComponent
  
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFondComponentComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    CalculatorComponentComponent,
    PageNotFondComponentComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatGridListModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

})
export class AppModule {
  constructor(router:Router){}
  
 }
