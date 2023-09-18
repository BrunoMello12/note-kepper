import { ChangeDetectorRef, Component } from '@angular/core';
import { Nota } from '../nota';
import { NotaService } from '../nota.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../../categorias/categoria.service';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.css']
})
export class CriarNotaComponent {
  nota: Nota;
  categorias: Categoria[] = [];

  constructor(
  private notaService: NotaService,
  private categoriaService: CategoriaService,
  private router: Router,
  private toastService: ToastrService,
  private cdr: ChangeDetectorRef
   ) {
    this.nota = new Nota('','','dark',0);
    this.selecionarTodasCategorias();
  }

  criarNota(){
      this.notaService.criar(this.nota).subscribe((nota) => {
      this.toastService.success('Nota criada com sucesso.', 'Sucesso');

      this.router.navigate(['/notas', 'listar']);
    });
  }

  selecionarTodasCategorias(){
    this.categoriaService.selecionarTodos().subscribe((categorias) => {
      this.categorias = categorias;
    })
  }

  categoriaSelecionada(id: number){
    this.nota.categoria = this.categorias.find(categoria => categoria.id == id);

    this.cdr.markForCheck();
  }
}
