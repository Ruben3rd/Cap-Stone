import { Component, OnInit, OnDestroy, ViewChild, Input, Output, EventEmitter, ElementRef } from "@angular/core";
import { loadModules } from 'esri-loader';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Output() mapLoadedEvent = new EventEmitter<boolean>();

  // The <div> where we will place the map
  @ViewChild("mapViewNode", { static: true }) private mapViewEl: ElementRef;

  /**
   * _zoom sets map zoom
   * _center sets map center
   * _basemap sets type of map
   * _loaded provides map loaded status
   */
  private _zoom = 10;
  private _center: Array<number> = [0.1278, 51.5074];
  private _basemap = "streets";
  private _loaded = false;
  private _view: any = null;

  get mapLoaded(): boolean {
    return this._loaded;
  }

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: Array<number>) {
    this._center = center;
  }

  get center(): Array<number> {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  constructor() {}

  async initializeMap() {
    try {
      // Load the modules for the ArcGIS API for JavaScript
      const [EsriMap, EsriMapView] = await loadModules([
        "esri/Map",
        "esri/views/MapView"
      ]);

      // Configure the Map
      const mapProperties: any = {
        basemap: this._basemap
      };

      const map: any = new EsriMap(mapProperties);

      // Initialize the MapView
      const mapViewProperties: any = {
        container: this.mapViewEl.nativeElement,
        center: this._center,
        zoom: this._zoom,
        map: map
      };

      this._view = new EsriMapView(mapViewProperties);
      await this._view.when();
      return this._view; 
    } catch (error) {
      console.log("EsriLoader: ", error);
    }
  }

  getCoord(ev: any) {
    console.log('X: ', ev.layerX);
    console.log('Y: ', ev.layerY);
    console.log('Clicked', ev);
  }

  ngOnInit() {
    // Initialize MapView and return an instance of MapView
    this.initializeMap().then(mapView => {
      // The map has been initialized
      console.log("mapView ready: ", this._view.ready);
      this._loaded = this._view.ready;
      this.mapLoadedEvent.emit(true);
    });
  }

  ngOnDestroy() {
    if (this._view) {
      // destroy the map view
      this._view.container = null;
    }
  }

}