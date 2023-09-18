import { Component, OnInit } from '@angular/core';
import { NotaService } from '../../notas/nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-excluir-categoria',
  templateUrl: './excluir-categoria.component.html',
  styleUrls: ['./excluir-categoria.component.css']
})
export class ExcluirCategoriaComponent implements OnInit {
  categoria: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService)
  {
    this.categoria = new Categoria(0,"");
  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoriaService.selecionarPorId(id)?.subscribe((categoria) => {
      this.categoria = categoria;
    });
  }

  excluirNota(){
    this.categoriaService.excluir(this.categoria).subscribe((categoria) => {
      this.toastService.success('Categoria excluída com sucesso.', 'Sucesso');

      this.router.navigate(['/categorias', 'listar'])
    });
  }
}
