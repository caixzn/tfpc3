import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'tfpc3-marca-editor',
  templateUrl: './marca-editor.component.html'
})
export class MarcaEditorComponent {
  marcaForm = this.fb.group({
    sigla: ['', [Validators.required, Validators.maxLength(5)]],
    descricao: ['', [Validators.required, Validators.maxLength(50)]]
  })

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.marcaForm.value);
  }
}
