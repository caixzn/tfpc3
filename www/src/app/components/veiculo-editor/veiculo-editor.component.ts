import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Marca } from '../../models/marca';
import { VeiculoService } from '../../services/veiculo.service';
import { Veiculo } from '../../models/veiculo';
import { MarcaService } from '../../services/marca.service';

@Component({
  selector: 'tfpc3-veiculo-editor',
  templateUrl: './veiculo-editor.component.html'
})
export class VeiculoEditorComponent implements OnInit {
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
    private veiculoService: VeiculoService,
    private marcaService: MarcaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas(): void {
    this.marcaService.getMarcas().subscribe(
      marcas => this.marcas = marcas
    );
  }

  onSubmit() {
    let newVeiculo = this.veiculoForm.value as unknown as Veiculo;
    this.veiculoService.addVeiculo(newVeiculo).subscribe(
      () => this.veiculoForm.reset()
    );
  }

  goBack(): void {
    this.location.back();
  }
}
