import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';

@Component({
  selector: 'app-listar-notas-arquivadas',
  templateUrl: './listar-notas-arquivadas.component.html',
  styleUrls: ['./listar-notas-arquivadas.component.css'],
})
export class ListarNotasArquivadasComponent {
  notas: Nota[] = [];
  categorias: Categoria[] = [];

  constructor(private notaService: NotaService,
     private categoriaService: CategoriaService,
     private toastService: ToastrService){

  }
  ngOnInit(): void {
    this.notaService.selecionarNotasArquivadas()?.subscribe((notas) => {
      this.notas = notas;
    });

    this.categoriaService.selecionarTodos().subscribe((categorias) => {
      this.categorias = categorias;
    })
  }

  selecionarTodas(): void {
    this.notaService.selecionarNotasArquivadas().subscribe((notas: Nota[]) => {
      this.notas = notas;
    });
  }

  selecionarNotasPorCategoria(categoria: Categoria): void{
    this.notaService.selecionarNotasArquivadasPorCategoria(categoria)
    .subscribe((notas) => {
      this.notas = notas;
    })
  }

  reativarNota(nota: Nota): void{
    nota.arquivada = false;

    this.notaService.editar(nota)
    .subscribe(() => {
      this.toastService.success("Nota reativada com sucesso!");

      this.notaService.selecionarNotasArquivadas()
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
