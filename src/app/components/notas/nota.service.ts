import { Injectable } from "@angular/core";
import { Nota } from "./nota";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Categoria } from "../categorias/categoria";

@Injectable({
  providedIn: 'root'
})
export class NotaService{
  private NOTAS_API_URL = 'http://localhost:3000/notas';
  private CATEGORIAS_API_URL = 'http://localhost:3000/categorias';

  
  constructor(private http: HttpClient) {}
  
  criar(nota: Nota) {
    return this.http.post<Nota>(this.NOTAS_API_URL, nota);
  }

  editar(nota: Nota){
    const API_URL_EDICAO = `${this.NOTAS_API_URL}/${nota.id}`
    return this.http.put<Nota>(API_URL_EDICAO, nota);
  }

  excluir(nota: Nota) {
    const API_URL_EXCLUSAO = `${this.NOTAS_API_URL}/${nota.id}`
    return this.http.delete(API_URL_EXCLUSAO);
  }

  selecionarPorId(id: number): Observable<Nota> | undefined{
    const API_URL_EDICAO = `${this.NOTAS_API_URL}/${id}`
    return this.http.get<Nota>(API_URL_EDICAO);
  }

  selecionarTodos(): Observable<Nota[]>{
    const url = `${this.NOTAS_API_URL}?arquivada=false`
    return this.http.get<Nota[]>(url);
  }

  selecionarNotasPorCategoria(categoria: Categoria): Observable<Nota[]> {
    const url = `${this.CATEGORIAS_API_URL}/${categoria.id}/notas?arquivada=false`

    return this.http.get<Nota[]>(url);
  }

  selecionarNotasArquivadasPorCategoria(categoria: Categoria): Observable<Nota[]> {
    const url = `${this.CATEGORIAS_API_URL}/${categoria.id}/notas?arquivada=true`

    return this.http.get<Nota[]>(url);
  }

  selecionarNotasArquivadas(): Observable<Nota[]>{
    const url = `${this.NOTAS_API_URL}?arquivada=true`
    return this.http.get<Nota[]>(url);
  }
}