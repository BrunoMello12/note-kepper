import { Injectable } from "@angular/core";
import { Nota } from "./nota";

@Injectable({
  providedIn: 'root'
})
export class NotaService{
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
  },];

  
  criar(nota: Nota) {
    nota.id = this.notas.length + 1;

    this.notas.push(nota);
  }

  selecionarTodos(): Nota[]{
    return this.notas;
  }
}