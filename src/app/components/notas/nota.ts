import { Categoria } from "../categorias/categoria";

export class Nota {
  id?: number;
  titulo: string;
  conteudo: string;
  tema: Tema;
  categoria?: Categoria;
  categoriaId: number;

  arquivada: boolean;

  constructor(titulo: string, conteudo: string, tema: Tema, categoriaId: number, id?: number) {
    this.id = id;
    this.titulo = titulo;
    this.conteudo = conteudo;
    this.tema = tema;
    this.categoriaId = categoriaId;

    this.arquivada = false;
  }
}

type Tema = 'info' | 'warning' | 'danger' | 'dark';