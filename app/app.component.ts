import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {HomeComponent, 
        PageComponent} from './core';

// import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
// import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Routes, Router } from '@angular/router'
// use Route instead
@RouteConfig([
  
   {
    path: '/page',
    name: 'Page',
    component: PageComponent
    
  },
   {
    path: '/home',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  }
])


@Component({
  selector: 'my-app',
  templateUrl: 'views/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
export class AppComponent { }
