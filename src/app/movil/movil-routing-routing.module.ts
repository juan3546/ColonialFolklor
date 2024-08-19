import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovilComponent } from './movil.component';
import { PrincipalComponent } from './principal/principal.component';

const routes: Routes = [
{
  path: 'movil', component: MovilComponent,
  children: [
    { path: 'principal', component: PrincipalComponent },
  ],
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovilRoutingRoutingModule { }
