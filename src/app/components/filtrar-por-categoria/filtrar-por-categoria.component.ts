import { Component, OnInit } from '@angular/core';
import { Nota } from '../notas/nota';
import { NotaService } from '../notas/nota.service';

@Component({
  selector: 'app-filtrar-por-categoria',
  templateUrl: './filtrar-por-categoria.component.html',
  styleUrls: ['./filtrar-por-categoria.component.css']
})
export class FiltrarPorCategoriaComponent implements OnInit {
  notasFiltradas: Nota[] = [];
  notas: Nota[] = [];

  constructor(private notaService: NotaService){}
  ngOnInit(): void {
    this.notaService.selecionarTodos()?.subscribe((notas) => {
      this.notas = notas;
    });
  }

  filtrarPorCategoria(titulo: string): void{
    for(let nota of this.notas){
      if(nota.categoria?.titulo == titulo){
        this.notasFiltradas.push(nota);
      }
    }
  }
  
}
