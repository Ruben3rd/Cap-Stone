import { Component, OnInit, ViewChild } from '@angular/core';
import {Location} from '@angular/common';
import { MapComponent } from 'src/app/components/map/map.component';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor(
    private _location: Location
  ) { }

  @ViewChild(MapComponent, {static: false}) map: MapComponent;
  
  // Corpus Christi Coordinates and map type/zoom
  mapCenter = [-97.396378, 27.800583];
  basemapType = 'streets-navigation-vector'; // May change if user chooses
  mapZoomLevel = 10;

  // Checks the status of the map
  mapLoadedEvent(status: boolean) {
    console.log('The map loaded: ' + status);
  }

  ngOnInit() {
  }

  goBack() {
    this._location.back();
  }

  // Changes the base map type to hybrid 
  // hybrid() {
  //   this.basemapType = 'hybrid';
  //   this.map.ngOnInit();
  // }

  // // Changes the base map type to streets navigation vector
  // SNV() {
  //   this.basemapType = 'streets-navigation-vector';
  // }

  // // Changes the base map type to dark gray
  // darkGray() {
  //   this.basemapType = 'dark-gray';
  // }

  // // Changes the base map type to terrain
  // terrain() {
  //   this.basemapType = 'terrain';
  // }
}