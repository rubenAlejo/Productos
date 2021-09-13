import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { ListaProductoService } from './lista-productos/lista-producto.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports:[
    HttpClientModule
  ],
  providers: [
    ListaProductoService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
