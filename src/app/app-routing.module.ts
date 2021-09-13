import { HomeComponent } from './components/home/home.component';
import { ListarSuperheroeComponent } from './components/listar-superheroe/listar-superheroe.component';
import { BuscarSuperheroeComponent } from './components/buscar-superheroe/buscar-superheroe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',component:HomeComponent},
  {path: 'buscar-superheroe',component:BuscarSuperheroeComponent},
  {path: 'listar-superheroe',component:ListarSuperheroeComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
