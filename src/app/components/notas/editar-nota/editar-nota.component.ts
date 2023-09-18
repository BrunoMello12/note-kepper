import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../nota.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Categoria } from '../../categorias/categoria';
import { CategoriaService } from '../../categorias/categoria.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {
  nota: Nota;
  categorias: Categoria[] = [];

  constructor(
    private notaService: NotaService,
    private route: ActivatedRoute,
    private categoriaService: CategoriaService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private toastService: ToastrService)
  {
    this.nota = new Nota('','','dark',0);
    this.selecionarTodasCategorias();
  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.notaService.selecionarPorId(id)?.subscribe((nota) => {
      this.nota = nota;
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

  editarNota(){
    this.notaService.editar(this.nota).subscribe((nota) => {
      this.toastService.success('Nota editada com sucesso.', 'Sucesso');

      this.router.navigate(['/notas', 'listar'])
    });
  }
}
