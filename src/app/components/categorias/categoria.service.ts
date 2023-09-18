import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Categoria } from "./categoria";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriaService{
  private API_URL = 'http://localhost:3000/categorias';

  constructor(private http: HttpClient) {}

  criar(categoria: Categoria) {
    return this.http.post<Categoria>(this.API_URL, categoria);
  }

  editar(categoria: Categoria) {
    const API_URL_EDICAO = `${this.API_URL}/${categoria.id}`
    return this.http.put<Categoria>(API_URL_EDICAO, categoria);
  }

  excluir(categoria: Categoria) {
    const API_URL_EXCLUSAO = `${this.API_URL}/${categoria.id}`
    return this.http.delete(API_URL_EXCLUSAO);
  }

  selecionarTodos(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.API_URL);
  }

  selecionarPorId(id: number): Observable<Categoria> | undefined{
    const API_URL_EDICAO = `${this.API_URL}/${id}`
    return this.http.get<Categoria>(API_URL_EDICAO);
  }
}