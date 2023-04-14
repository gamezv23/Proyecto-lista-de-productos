import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  constructor(private http: HttpClient) {}

  get_llamarListado() {
    return this.http.get<any[]>(
      'http://54.210.27.118/api-pruebas/public/api/products'
    );
  }


  addProducto(payload:any){
    return this.http.post("http://54.210.27.118/api-pruebas/public/api/products",payload)
    }


    deleteProducto(id:any){
      return this.http.delete(`http://54.210.27.118/api-pruebas/public/api/products/${id}`)
    }

    editproduct(id:any, payload:any){
      return this.http.put(`http://54.210.27.118/api-pruebas/public/api/products/${id}`,payload)
      }

}
