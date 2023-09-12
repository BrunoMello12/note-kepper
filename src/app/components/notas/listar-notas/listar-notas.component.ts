import { Component } from '@angular/core';
import { Nota } from '../nota';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent {
  notas: Nota[] = [
    {
      id: 0,
      titulo: 'Lavar o cachorro 🦮',
      conteudo: 'Pegar a toalha > Pegar o Shampoo',
      tema: 'dark',
    },
    {
      id: 1,
      titulo: 'Prepara Aula',
      conteudo: 'Prerparar Jamboard',
      tema: 'warning',
    },
    {
      id: 2,
      titulo: 'AaAAAADAAAAAAAAAAAAAAAa',
      conteudo: 'Testando os cards',
      tema: 'danger',
    },
  ];
}
