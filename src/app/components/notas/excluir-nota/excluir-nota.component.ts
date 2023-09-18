import { Component } from '@angular/core';
import { NotaService } from '../nota.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Nota } from '../nota';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-excluir-nota',
  templateUrl: './excluir-nota.component.html',
  styleUrls: ['./excluir-nota.component.css']
})
export class ExcluirNotaComponent {
  nota: Nota;

  constructor(
    private notaService: NotaService,
    private route: ActivatedRoute,
    private router: Router,
    private toastService: ToastrService)
  {
    this.nota = new Nota('','','dark',0);
  }
  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.notaService.selecionarPorId(id)?.subscribe((nota) => {
      this.nota = nota;
    });
  }

  excluirNota(){
    this.notaService.excluir(this.nota).subscribe((nota) => {
      this.toastService.success('Nota excluída com sucesso.', 'Sucesso');

      this.router.navigate(['/notas', 'listar'])
    });
  }
}
