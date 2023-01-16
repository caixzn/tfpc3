import { Component } from '@angular/core';

export type Editor = 'marca' | 'veiculo'

@Component({
  selector: 'tfpc3-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'CRUD Veículos';
}
