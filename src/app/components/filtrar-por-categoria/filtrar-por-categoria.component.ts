import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Categoria } from '../categorias/categoria';

@Component({
  selector: 'app-filtrar-por-categoria',
  templateUrl: './filtrar-por-categoria.component.html',
  styleUrls: ['./filtrar-por-categoria.component.css']
})
export class FiltrarPorCategoriaComponent {
  @Input({required: true}) categorias: Categoria[] = [];

  @Output() onFiltroSelecionado: EventEmitter<Categoria | null>;

  constructor(){
    this.onFiltroSelecionado = new EventEmitter();
  }

  selecionarTodas(): void{
    this.onFiltroSelecionado.emit(null);
  }

  selecionarNotasPorCategoria(categoria: Categoria): void{
    this.onFiltroSelecionado.emit(categoria);
  }
}
