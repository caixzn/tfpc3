import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MarcaService } from '../../services/marca.service';
import { Marca } from '../../models/marca';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tfpc3-marca-detail',
  templateUrl: './marca-detail.component.html'
})
export class MarcaDetailComponent implements OnInit {
  id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
  marcaForm = this.fb.group({
    sigla: ['', [Validators.required, Validators.maxLength(5)]],
    descricao: ['', [Validators.required, Validators.maxLength(50)]]
  })

  get sigla() { return this.marcaForm.get('sigla'); }
  get descricao() { return this.marcaForm.get('descricao'); }

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private marcaService: MarcaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getMarca();
  }

  getMarca(): void {
    this.marcaService.getMarca(this.id)
      .subscribe(marca =>
        this.marcaForm.setValue({
          sigla: marca.sigla,
          descricao: marca.descricao
        })
      );
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    let updated: Marca = {
      'id': this.id,
      'descricao': this.descricao?.value as string,
      'sigla': this.sigla?.value as string
    };
    this.marcaService.updateMarca(updated).subscribe();
  }
}
