import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Veiculo } from '../models/veiculo';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private veiculosUrl = 'http://localhost:8080/api/veiculos';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<Veiculo[]> {
    return this.http.get<Veiculo[]>(this.veiculosUrl);
  }

  getVeiculo(id: number): Observable<Veiculo> {
    const url = `${this.veiculosUrl}/${id}`;
    return this.http.get<Veiculo>(url).pipe(
      tap(m => console.log(`fetched veiculo id=${id}`)),
      catchError(this.handleError<Veiculo>(`getVeiculo id=${id}`))
    );
  }

  addVeiculo(veiculo: Veiculo): Observable<Veiculo> {
    return this.http.post<Veiculo>(this.veiculosUrl, veiculo, this.httpOptions).pipe(
      tap((newVeiculo: Veiculo) => console.log(`added veiculo w/ id=${newVeiculo.id}`)),
      catchError(this.handleError<Veiculo>('addVeiculo'))
    );
  }

  deleteVeiculo(id: number): Observable<Veiculo> {
    const url = `${this.veiculosUrl}/${id}`;

    return this.http.delete<Veiculo>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted veiculo id=${id}`)),
      catchError(this.handleError<Veiculo>('deleteVeiculo'))
    );
  }

  updateVeiculo(veiculo: Veiculo): Observable<any> {
    const url = `${this.veiculosUrl}/${veiculo.id}`;

    return this.http.put(url, veiculo, this.httpOptions).pipe(
      tap(_ => console.log(`updated veiculo id=${veiculo.id}`)),
      catchError(this.handleError<any>('updateVeiculo'))
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
