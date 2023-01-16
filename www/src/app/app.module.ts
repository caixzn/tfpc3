import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MarcaEditorComponent } from './components/marca-editor/marca-editor.component';
import { VeiculoEditorComponent } from './components/veiculo-editor/veiculo-editor.component';
import { VeiculoDetailComponent } from './components/veiculo-detail/veiculo-detail.component';
import { MarcaDetailComponent } from './components/marca-detail/marca-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MarcaEditorComponent,
    VeiculoEditorComponent,
    VeiculoDetailComponent,
    MarcaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
