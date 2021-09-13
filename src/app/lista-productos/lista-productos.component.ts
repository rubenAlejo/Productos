import { Component, OnInit } from '@angular/core';
import { ListaProductoService } from './lista-producto.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.scss']
})
export class ListaProductosComponent implements OnInit 
{
  constructor(private service: ListaProductoService) { }

  public listaProductos: any[] =[];
  public loading: boolean = false;
  public nuevoProducto: string = '';
  public vacio: boolean = false;

  ngOnInit() 
  {
    this.loading = true;
    this.service.obtenerProductos(3).subscribe(result =>
      {
        let data: any[] = result;
        this.loading = false;
        for(let index = 0; index < data.length; index++)
        {
          this.listaProductos.push(data[index])
        }
        console.log("aqui => ",this.listaProductos)
      })
  }

  addProductToList(producto: string)
  {
    console.log("producto => ",producto)
    if(producto != undefined && producto != null && producto != '' && producto != ' ')
    {
      this.vacio = false;
      let newProduct = 
      {
        title: producto
      }
      this.listaProductos.push(newProduct);
    }
    else
    {
      this.vacio = true;
    }
  }

}
