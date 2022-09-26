import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './views/home/formulario/formulario.component';
import { DesaparecidosComponent } from './views/home/desaparecidos/desaparecidos.component';
import { DescricaoComponent } from './views/home/descricao/descricao.component';
import { DoacaoComponent } from './views/home/doacao/doacao.component';
import { ReportarComponent } from './views/home/reportar/reportar.component';
import { AgradecimentosComponent } from './views/home/agradecimentos/agradecimentos.component';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';
import { AllBlogsComponent } from './views/all-blogs/all-blogs.component';
import { BlogComponent } from './views/blog/blog.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path:'home', component: HomeComponent},
  { path:'', redirectTo: 'home',pathMatch: 'full'},
  { path:'formulario', component: FormularioComponent},
  { path: 'doacao', component: DoacaoComponent },
  { path: 'reportar/:id', component: ReportarComponent },
  { path: 'agradecimento', component: AgradecimentosComponent },
  { path: 'acessibilidade', component: AcessibilidadeComponent },
  { path:'desaparecidos', component: DesaparecidosComponent},
  { path:'descricao/:id', component: DescricaoComponent},
  { path:'blogs', component: AllBlogsComponent},
  { path:'blog', component: BlogComponent},
  { path:'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
