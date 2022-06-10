import { FooterComponent } from './views/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormularioComponent } from './views/home/formulario/formulario.component';
import { HeaderComponent } from './views/header/header.component';
import { DesaparecidosComponent } from './views/home/desaparecidos/desaparecidos.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatGridListModule} from '@angular/material/grid-list';
import { DescricaoComponent } from './views/home/descricao/descricao.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { DoacaoComponent } from './views/home/doacao/doacao.component';
import { ReportarComponent } from './views/home/reportar/reportar.component';
import { AgradecimentosComponent } from './views/home/agradecimentos/agradecimentos.component';
import { AcessibilidadeComponent } from './acessibilidade/acessibilidade.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FormularioComponent,
    FooterComponent,
    HeaderComponent,
    DesaparecidosComponent,
    DescricaoComponent,
    DoacaoComponent,
    ReportarComponent,
    AgradecimentosComponent,
    AcessibilidadeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatButtonModule,
    MatDialogModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
    MatStepperModule,
    MatGridListModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
  ] ,
  exports: [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
