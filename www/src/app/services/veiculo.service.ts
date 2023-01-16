import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {
  private api = 'http://localhost:8080/api/veiculos';
}
