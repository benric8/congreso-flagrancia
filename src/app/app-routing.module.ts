import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', component: InicioComponent, data: { title: "Inicio"}},
  { path: 'inicio', component: InicioComponent, data: { title: "Inicio"}},
  { path: '**', component: PageNotFoundComponent, data: { title: 'Pagina no encontrada' }}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
