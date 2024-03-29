import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesaparecidosComponent } from './views/home/desaparecidos/desaparecidos.component';
import { DescricaoComponent } from './views/home/descricao/descricao.component';
import { DoacaoComponent } from './views/home/doacao/doacao.component';
import { ReportarComponent } from './views/home/reportar/reportar.component';
import { AgradecimentosComponent } from './views/home/agradecimentos/agradecimentos.component';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';
import { AllBlogsComponent } from './views/all-blogs/all-blogs.component';
import { BlogComponent } from './views/blog/blog.component';
import { LoginComponent } from './views/login/login.component';
import { DeleteDesaparecidoComponent } from './desaparecidos/delete-desaparecido/delete-desaparecido.component';
import { UpdateDesaparecidoComponent } from './desaparecidos/update-desaparecido/update-desaparecido.component';
import { ListVoluntarioComponent } from './voluntarios/list-voluntario/list-voluntario.component';
import { AddVoluntarioComponent } from './voluntarios/add-voluntario/add-voluntario.component';
import { DeleteVoluntarioComponent } from './voluntarios/delete-voluntario/delete-voluntario.component';
import { UpdateVoluntarioComponent } from './voluntarios/update-voluntario/update-voluntario.component';
import { AddDesaparecidoComponent } from './desaparecidos/add-desaparecido/add-desaparecido.component';
import { SucessoComponent } from './components/sucesso/sucesso.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'', redirectTo: 'home',pathMatch: 'full'},
  { path: 'doacao', component: DoacaoComponent },
  { path: 'reportar/:id', component: ReportarComponent },
  { path: 'agradecimento', component: AgradecimentosComponent },
  { path: 'acessibilidade', component: AcessibilidadeComponent },
  { path: 'desaparecidos', component: DesaparecidosComponent},
  { path: 'descricao/:id', component: DescricaoComponent},
  { path: 'sucesso', component: SucessoComponent},
  { path: 'blogs', component: AllBlogsComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'login', component: LoginComponent},
  { path: 'desaparecido/deletar/:id', component: DeleteDesaparecidoComponent},
  { path: 'desaparecido/atualizar/:id', component: UpdateDesaparecidoComponent},
  { path: 'desaparecido/adicionar', component: AddDesaparecidoComponent},
  { path: 'voluntarios', component: ListVoluntarioComponent},
  { path: 'voluntarios/deletar/:id', component: DeleteVoluntarioComponent},
  { path: 'voluntarios/atualizar/:id', component: UpdateVoluntarioComponent},
  { path: 'voluntarios/adicionar', component: AddVoluntarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
