import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../categoria';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit{
  categoria: Categoria;

  constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService)
  {
    this.categoria = new Categoria(0, "");
  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.categoriaService.selecionarPorId(id)?.subscribe((categoria) => {
      this.categoria = categoria;
    });
  }

  editarCategoria(){
    this.categoriaService.editar(this.categoria).subscribe((categoria) => {
      this.toastService.success('Categoria editada com sucesso.', 'Sucesso');

      this.router.navigate(['/categorias', 'listar'])
    });
  }
}

