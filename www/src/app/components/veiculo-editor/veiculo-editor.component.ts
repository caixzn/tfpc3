import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Marca } from 'src/app/models/marca';

@Component({
  selector: 'tfpc3-veiculo-editor',
  templateUrl: './veiculo-editor.component.html'
})
export class VeiculoEditorComponent implements OnInit {
  veiculoForm = this.fb.group({
    placa: ['', [Validators.required, Validators.maxLength(8)]],
    cor: ['', [Validators.required, Validators.maxLength(20)]],
    anoModelo: ['', [Validators.required, Validators.pattern(/[0-9]{4}/)]],
    anoFabricacao: ['', [Validators.required, Validators.pattern(/[0-9]{4}/)]],
    marca: ['', [Validators.required]]
  });
  
  marcaSelected: Marca = {sigla:'', descricao:''};
  marcas:Array<Marca> = [{id: 10, sigla: 'BMW', descricao:'BMW'}, {id: 111, sigla: 'VW', descricao:'Volkswagen'}];

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.veiculoForm.value);
  }

  ngOnInit(): void {
    
  }
}
