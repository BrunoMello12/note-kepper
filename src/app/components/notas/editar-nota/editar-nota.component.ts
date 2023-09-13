import { Component, OnInit } from '@angular/core';
import { Nota } from '../nota';
import { ActivatedRoute, Router } from '@angular/router';
import { NotaService } from '../nota.service';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {
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

  editarNota(){
    this.notaService.editar(this.nota).subscribe((nota) => {
      this.toastService.success('Nota editada com sucesso.', 'Sucesso');

      this.router.navigate(['/notas', 'listar'])
    });
  }
}
