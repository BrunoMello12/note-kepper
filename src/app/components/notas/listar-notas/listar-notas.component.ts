import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';
import { CategoriaService } from '../../categorias/categoria.service';
import { Categoria } from '../../categorias/categoria';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit{
  notas: Nota[] = [];
  categorias: Categoria[] = [];

  constructor(private notaService: NotaService,
     private categoriaService: CategoriaService,
     private toastService: ToastrService){

  }
  ngOnInit(): void {
    this.notaService.selecionarTodos()?.subscribe((notas) => {
      this.notas = notas;
    });

    this.categoriaService.selecionarTodos().subscribe((categorias) => {
      this.categorias = categorias;
    })
  }

  selecionarTodas(): void {
    this.notaService.selecionarTodos().subscribe((notas: Nota[]) => {
      this.notas = notas;
    });
  }

  selecionarNotasPorCategoria(categoria: Categoria): void{
    this.notaService.selecionarNotasPorCategoria(categoria)
    .subscribe((notas) => {
      this.notas = notas;
    })
  }

  arquivarNota(nota: Nota): void{
    nota.arquivada = true;

    this.notaService.editar(nota)
    .subscribe(() => {
      this.toastService.success("Nota arquivada com sucesso!");

      this.notaService.selecionarTodos()
      .subscribe((notas) => {
        this.notas = notas;
      });
    })
  }

  filtrarNotasPorCategoria(categoria: Categoria | null): void{
    if(categoria == null){
      this.selecionarTodas();
      return;
    }

    this.selecionarNotasPorCategoria(categoria);
  }
}
