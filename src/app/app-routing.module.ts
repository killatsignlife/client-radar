import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './views/home/formulario/formulario.component';
import { DesaparecidosComponent } from './views/home/desaparecidos/desaparecidos.component';
import { DescricaoComponent } from './views/home/descricao/descricao.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'formulario', component: FormularioComponent},
  { path:'desaparecidos', component: DesaparecidosComponent},
  { path:'descricao/:id', component: DescricaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
