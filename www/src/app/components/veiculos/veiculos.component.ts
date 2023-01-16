import { Component, OnInit } from '@angular/core';
import { VeiculoService } from 'src/app/services/veiculo.service';
import { Veiculo } from '../../models/veiculo';

@Component({
  selector: 'tfpc3-veiculos',
  templateUrl: './veiculos.component.html'
})
export class VeiculosComponent implements OnInit {
  veiculos: Array<Veiculo> = [];
  
  constructor(private veiculoService: VeiculoService) { }

  ngOnInit(): void {
    this.getVeiculos();
  }

  getVeiculos(): void {
    this.veiculoService.getVeiculos().subscribe(
      veiculos => this.veiculos = veiculos
    );
  }

  delete(veiculo: Veiculo): void {
    this.veiculos = this.veiculos.filter(m => m !== veiculo);
    this.veiculoService.deleteVeiculo(veiculo.id as number).subscribe();
  }
}
