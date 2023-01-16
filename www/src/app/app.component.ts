import { Component } from '@angular/core';

export type Editor = 'marca' | 'veiculo'

@Component({
  selector: 'tfpc3-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  editor: Editor = 'marca';

  get showMarcaEditor() {
    return this.editor === 'marca';
  }

  get showVeiculoEditor() {
    return this.editor === 'veiculo';
  }

  toggleEditor(type: Editor) {
    this.editor = type;
  }
}
