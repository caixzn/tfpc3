import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarcaDetailComponent } from './components/marca-detail/marca-detail.component';
import { MarcaEditorComponent } from './components/marca-editor/marca-editor.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { VeiculoDetailComponent } from './components/veiculo-detail/veiculo-detail.component';
import { VeiculoEditorComponent } from './components/veiculo-editor/veiculo-editor.component';
import { VeiculosComponent } from './components/veiculos/veiculos.component';

const routes: Routes = [
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'dashboard', component: AppComponent },
  { path: 'marcas', component: MarcasComponent },
  { path: 'veiculos', component: VeiculosComponent },
  { path: 'marca/new', component: MarcaEditorComponent },
  { path: 'marca/:id', component: MarcaDetailComponent },
  { path: 'veiculo/new', component: VeiculoEditorComponent },
  { path: 'veiculo/:id', component: VeiculoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
