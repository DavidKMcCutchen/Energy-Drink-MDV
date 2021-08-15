import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "@energy-drink/api-interfaces";

const BASE_URL = 'http://localhost:3000/'

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  model = 'products';

  constructor(private httpClient: HttpClient) {}

  all() {
    return this.httpClient.get<Product[]>(this.getUrl());
  }

  find(productId: string) {
    return this.httpClient.get<Product>(this.getUrlById(productId));
  }

  create(products: Product) {
    return this.httpClient.post<Product>(this.getUrl(), products);
  }

  update(products: Product) {
    return this.httpClient.patch<Product>(this.getUrlById(products.id), products);
  }

  delete({ id }: Product) {
    return this.httpClient.delete<Product>(this.getUrlById(id));
  }

  private getUrl() {
    return `${BASE_URL}${this.model}`;
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`;
  }
}

