import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovilComponent } from './movil.component';
import { MenuModule } from '../menu/menu.module';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    MovilComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    MenuModule,
    RouterModule
  ],
  exports: [
    
  ]
})
export class MovilModule { }
