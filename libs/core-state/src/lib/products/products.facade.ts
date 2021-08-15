import { Injectable } from '@angular/core';
import { Product } from '@energy-drink/api-interfaces';
import { Action, ActionsSubject, select, Store } from '@ngrx/store';
import { filter } from 'rxjs/operators';
import * as ProductActions from './products.actions';
import * as fromProduct from './products.reducer';
import * as ProductSelectors from './products.selectors';

@Injectable({
  providedIn: 'root',
})
export class ProductFacade {
  allProducts$ = this.store.pipe(select(ProductSelectors.getAllProducts));
  selectedProduct$ = this.store.pipe(select(ProductSelectors.getSelectedProduct));
  loaded$ = this.store.pipe(select(ProductSelectors.getProductsLoaded));

  mutations$ = this.actions$.pipe(
    filter((action: Action) =>
      action.type === ProductActions.createProduct({} as any).type ||
      action.type === ProductActions.deleteProduct({} as any).type ||
      action.type === ProductActions.updateProduct({} as any).type
    )
  );

  selectProduct(productId: string) {
    this.dispatch(ProductActions.selectProduct({ productId }));
  }

  loadProducts() {
    this.dispatch(ProductActions.loadProducts());
  }

  loadProduct(productId: string) {
    this.dispatch(ProductActions.loadProduct({ productId }));
  }

  saveProduct(product: Product) {
    product.id ? this.updateProduct(product) : this.createProduct(product);
  }

  createProduct(product: Product) {
    this.dispatch(ProductActions.createProduct({ product }));
  }

  updateProduct(product: Product) {
    this.dispatch(ProductActions.updateProduct({ product }));
  }

  deleteProduct(product: Product) {
    this.dispatch(ProductActions.deleteProduct({ product }));
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }

  constructor(
    private store: Store<fromProduct.ProductPartialState>,
    private actions$: ActionsSubject
  ) {}
}