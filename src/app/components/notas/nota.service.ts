import { Injectable } from "@angular/core";
import { Nota } from "./nota";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NotaService{
  private API_URL = 'http://localhost:3000/notas';
  
  constructor(private http: HttpClient) {}

  
  criar(nota: Nota) {
    return this.http.post<Nota>(this.API_URL, nota);
  }

  editar(nota: Nota){
    const API_URL_EDICAO = `${this.API_URL}/${nota.id}`
    return this.http.put<Nota>(API_URL_EDICAO, nota);
  }

  excluir(nota: Nota) {
    const API_URL_EXCLUSAO = `${this.API_URL}/${nota.id}`
    return this.http.delete(API_URL_EXCLUSAO);
  }

  selecionarPorId(id: number): Observable<Nota> | undefined{
    const API_URL_EDICAO = `${this.API_URL}/${id}`
    return this.http.get<Nota>(API_URL_EDICAO);
  }

  selecionarTodos(): Observable<Nota[]>{
    return this.http.get<Nota[]>(this.API_URL);
  }
}