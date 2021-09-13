import { Injectable } from "@angular/core";
import { HttpClient, HttpParams} from "@angular/common/http";
//import { Observable } from "rxjs/Observable";

//import { environment } from "../../../environments/environment";

@Injectable()
export class ListaProductoService
{
    private ambiente = 'https://fakestoreapi.com/products';

    constructor (private http: HttpClient,)
    {}

    obtenerProductos(limite: number)
    {
        let params = new HttpParams;
        params = params.set('limit',limite.toString());
    
        return this.http.get<any[]>(this.ambiente,{params});
    }
}