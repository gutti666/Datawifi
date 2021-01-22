import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContmenuPageRoutingModule } from './contmenu-routing.module';

import { ContmenuPage } from './contmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContmenuPageRoutingModule
  ],
  declarations: [ContmenuPage]
})
export class ContmenuPageModule {}
