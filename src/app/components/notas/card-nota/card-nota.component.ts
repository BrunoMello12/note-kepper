import { Component, Input } from '@angular/core';
import { Nota } from '../nota';
import { Categoria } from '../../categorias/categoria';

@Component({
  selector: 'app-card-nota',
  templateUrl: './card-nota.component.html',
  styleUrls: ['./card-nota.component.css']
})
export class CardNotaComponent {
  
  constructor(){
    
  }

  @Input() nota: Nota = {
    id: 0,
    titulo: 'Lavar o cachorro 🦮',
    conteudo: 'Pegar a toalha > Pegar o Shampoo',
    categoriaId: 0,
    tema: 'dark',
  };
}
