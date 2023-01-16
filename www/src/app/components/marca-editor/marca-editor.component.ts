import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { MarcaService } from '../../services/marca.service';
import { Marca } from '../../models/marca';

@Component({
  selector: 'tfpc3-marca-editor',
  templateUrl: './marca-editor.component.html'
})
export class MarcaEditorComponent implements OnInit {
  marcaForm = this.fb.group({
    sigla: ['', [Validators.required, Validators.maxLength(5)]],
    descricao: ['', [Validators.required, Validators.maxLength(50)]]
  })

  get sigla() { return this.marcaForm.get('sigla'); }
  get descricao() { return this.marcaForm.get('descricao'); }

  constructor(
    private fb: FormBuilder,
    private marcaService: MarcaService,
    private location: Location
  ) { }

  ngOnInit(): void {
      
  }

  onSubmit() {
    this.marcaService.addMarca(this.marcaForm.value as Marca).subscribe(
      () => this.marcaForm.reset()
    );
  }

  goBack(): void {
    this.location.back();
  }
}
