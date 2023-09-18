import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListarNotasComponent } from './components/notas/listar-notas/listar-notas.component';
import { CardNotaComponent } from './components/notas/card-nota/card-nota.component';
import { CriarNotaComponent } from './components/notas/criar-nota/criar-nota.component';
import { FormsModule } from '@angular/forms';
import { EditarNotaComponent } from './components/notas/editar-nota/editar-nota.component';
import { ExcluirNotaComponent } from './components/notas/excluir-nota/excluir-nota.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListarCategoriasComponent } from './components/categorias/listar-categorias/listar-categorias.component';
import { CriarCategoriaComponent } from './components/categorias/criar-categoria/criar-categoria.component';
import { EditarCategoriaComponent } from './components/categorias/editar-categoria/editar-categoria.component';
import { ExcluirCategoriaComponent } from './components/categorias/excluir-categoria/excluir-categoria.component';
import { FiltrarPorCategoriaComponent } from './components/filtrar-por-categoria/filtrar-por-categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListarNotasComponent,
    CardNotaComponent,
    CriarNotaComponent,
    EditarNotaComponent,
    ExcluirNotaComponent,
    ListarCategoriasComponent,
    CriarCategoriaComponent,
    EditarCategoriaComponent,
    ExcluirCategoriaComponent,
    FiltrarPorCategoriaComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
