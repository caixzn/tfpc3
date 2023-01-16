import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import { Marca } from '../models/marca'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {
  private api = 'http://localhost:8080/api/marcas';

  constructor(private httpClient: HttpClient) {}

  save(marca: Marca): Observable<Marca> {
    return this.httpClient.post<Marca>(this.api, marca);
  }
}
