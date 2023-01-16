import { Component, OnInit } from '@angular/core';
import { MarcaService } from '../../services/marca.service';
import { Marca } from '../../models/marca';

@Component({
  selector: 'tfpc3-marcas',
  templateUrl: './marcas.component.html'
})
export class MarcasComponent implements OnInit {
  marcas: Array<Marca> = [];
  
  constructor(private marcaService: MarcaService) { }

  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas(): void {
    this.marcaService.getMarcas().subscribe(
      marcas => this.marcas = marcas
    );
  }

  delete(marca: Marca): void {
    this.marcas = this.marcas.filter(m => m !== marca);
    this.marcaService.deleteMarca(marca.id as number).subscribe();
  }
}
