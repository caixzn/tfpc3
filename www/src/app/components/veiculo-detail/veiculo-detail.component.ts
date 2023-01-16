import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VeiculoService } from '../../services/veiculo.service';
import { Marca } from '../../models/marca';
import { Veiculo } from '../../models/veiculo';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'tfpc3-veiculo-detail',
  templateUrl: './veiculo-detail.component.html'
})
export class VeiculoDetailComponent implements OnInit {
  id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  veiculoForm = this.fb.group({
    placa: ['', [Validators.required, Validators.maxLength(8)]],
    cor: ['', [Validators.required, Validators.maxLength(20)]],
    anoModelo: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    anoFabricacao: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    marca: ['', [Validators.required]]
  });
  marcas: Array<Marca> = [];

  get placa() { return this.veiculoForm.get('placa'); }
  get cor() { return this.veiculoForm.get('cor'); }
  get anoModelo() { return this.veiculoForm.get('anoModelo'); }
  get anoFabricacao() { return this.veiculoForm.get('anoFabricacao'); }
  get marca() { return this.veiculoForm.get('marca'); }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private veiculoService: VeiculoService,
    private marcaService: MarcaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getVeiculo();
    this.getMarcas();
  }

  getMarcas(): void {
    this.marcaService.getMarcas().subscribe(
      marcas => this.marcas = marcas
    );
  }

  getVeiculo(): void {
    this.veiculoService.getVeiculo(this.id)
      .subscribe(veiculo =>
        this.veiculoForm.setValue({
          placa: veiculo.placa,
          cor: veiculo.cor,
          anoModelo: veiculo.anoModelo.toString(),
          anoFabricacao: veiculo.anoFabricacao.toString(),
          marca: ''
        })
      );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    let updated = this.veiculoForm.value as unknown as Veiculo;
    updated.id = this.id;
    console.log(updated);
    this.veiculoService.updateVeiculo(updated).subscribe();
  }
}
