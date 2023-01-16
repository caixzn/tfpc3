import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { Marca } from '../models/marca'
import { catchError, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private marcasUrl = 'http://localhost:8080/api/marcas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getMarcas(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.marcasUrl);
  }

  getMarca(id: number): Observable<Marca> {
    const url = `${this.marcasUrl}/${id}`;
    return this.http.get<Marca>(url).pipe(
      tap(_ => console.log(`fetched marca id=${id}`)),
      catchError(this.handleError<Marca>(`getMarca id=${id}`))
    );
  }

  addMarca(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(this.marcasUrl, marca, this.httpOptions).pipe(
      tap((newMarca: Marca) => console.log(`added marca w/ id=${newMarca.id}`)),
      catchError(this.handleError<Marca>('addMarca'))
    );
  }

  deleteMarca(id: number): Observable<Marca> {
    const url = `${this.marcasUrl}/${id}`;

    return this.http.delete<Marca>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted marca id=${id}`)),
      catchError(this.handleError<Marca>('deleteMarca'))
    );
  }

  updateMarca(marca: Marca): Observable<any> {
    const url = `${this.marcasUrl}/${marca.id}`;

    return this.http.put(url, marca, this.httpOptions).pipe(
      tap(_ => console.log(`updated marca id=${marca.id}`)),
      catchError(this.handleError<any>('updateMarca'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      console.error(`${operation} failed: ${error.message}`);

      return of(result as T);
    };
  }
}
