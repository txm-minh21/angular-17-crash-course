import {Injectable} from '@angular/core';
import {PaginationParams, Products} from "../../types";
import {Observable} from "rxjs";
import {ApiService} from "./api.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private apiService: ApiService) {
  }

  // Getting products from the API
  getProducts = (
    url: string,
    params: PaginationParams
  ): Observable<Products> => {
    return this.apiService.get(url, {
      params,
      responseType: 'json',
    });
  };

  // Adding a product via the API
  addProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.post(url, body, {});
  };

  // Editing a product via the API
  editProduct = (url: string, body: any): Observable<any> => {
    return this.apiService.put(url, body, {});
  };

  // Deleting a product via the API
  deleteProduct = (url: string): Observable<any> => {
    return this.apiService.delete(url, {});
  };
}
