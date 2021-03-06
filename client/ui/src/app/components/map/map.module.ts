import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapComponent } from '../map/map.component';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';
import { ConfirmationPopoverComponent } from '../confirmation-popover/confirmation-popover.component';
import { ConfirmationPopoverModule } from '../confirmation-popover/confirmation-popover.module';
import { PointPopoverModule } from '../point-popover/point-popover.module';

@NgModule({
  declarations: [MapComponent, ConfirmationPopoverComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    PointPopoverModule
  ],
  exports: [MapComponent],
  entryComponents: [
    ConfirmationPopoverComponent
  ],
})
export class MapModule { }
