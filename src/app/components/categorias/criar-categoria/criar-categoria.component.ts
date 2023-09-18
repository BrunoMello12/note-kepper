import { Component, OnInit } from '@angular/core';
import { Categoria } from '../categoria';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-criar-categoria',
  templateUrl: './criar-categoria.component.html',
  styleUrls: ['./criar-categoria.component.css']
})
export class CriarCategoriaComponent{
  categoria: Categoria= new Categoria(0, "");

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    private toastService: ToastrService){ }

  criarCategoria(){
    this.categoriaService.criar(this.categoria).subscribe((categoria) => {
      this.toastService.success('Categoria criada com sucesso.', 'Sucesso');

      this.router.navigate(['/categorias', 'listar']);
    })
  }
}
