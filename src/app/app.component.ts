import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import skygear from 'skygear';

import { TabsPage } from '../pages/tabs/tabs';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      skygear.config({
        'endPoint': 'https://api-staging.tailor-m.com/',
        'apiKey': 'EGgGhJS7y2in+RJJ',
      }).then(() => {
        console.log('skygear container is now ready for making API calls.');
      }, (error) => {
        console.error(error);
      });
      StatusBar.styleDefault();
      Splashscreen.hide();

    });
  }
}
