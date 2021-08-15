import { Injectable } from "@angular/core";
import { ProductService } from "@energy-drink/core-data";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as ProductActions from './products.actions';
import { map } from "rxjs/operators";
import { fetch, pessimisticUpdate } from "@nrwl/angular";
import { Product } from "@energy-drink/api-interfaces";

@Injectable()
export class ProductEffects {
  loadProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProduct),
      fetch({
        run: (action) =>
          this.productService
            .find(action.productId)
            .pipe(
              map((product: Product) =>
                ProductActions.loadProductSuccess({ product })
              )
            ),
        onError: (action, error) => ProductActions.loadProductFailure({ error }),
      })
    )
  );

  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.loadProducts),
      fetch({
        run: () =>
          this.productService
            .all()
            .pipe(
              map((products: Product[]) =>
                ProductActions.loadProductsSuccess({ products })
              )
            ),
        onError: (action, error) => ProductActions.loadProductsFailure({ error }),
      })
    )
  );

  updateProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.updateProduct),
      pessimisticUpdate({
        run: (action) =>
          this.productService
            .update(action.product)
            .pipe(
              map((product: Product) =>
                ProductActions.updateProductSuccess({ product })
              )
            ),
        onError: (action, error) =>
          ProductActions.updateProductFailure({ error }),
      })
    )
  );

  deleteProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.deleteProduct),
      pessimisticUpdate({
        run: (action) =>
          this.productService
            .delete(action.product)
            .pipe(
              map(() =>
                ProductActions.deleteProductSuccess({ product: action.product })
              )
            ),
        onError: (action, error) =>
          ProductActions.deleteProductFailure({ error }),
      })
    )
  );

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductActions.createProduct),
      pessimisticUpdate({
        run: (action) =>
          this.productService
            .create(action.product)
            .pipe(
              map((product: Product) =>
                ProductActions.createProductSuccess({ product })
              )
            ),
        onError: (action, error) =>
          ProductActions.createProductFailure({ error }),
      })
    )
  );

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
}