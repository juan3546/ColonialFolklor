import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovilRoutingModule } from './movil/movil-routing.module';

const routes: Routes = [
  {path:'', redirectTo:'movil/principal', pathMatch:'full'},
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MovilRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
