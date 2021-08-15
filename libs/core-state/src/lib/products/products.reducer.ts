import { Product } from "@energy-drink/api-interfaces";
import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { Action, createReducer, on } from "@ngrx/store";
import * as ProductActions from './products.actions';

export const PRODUCT_FEATURE_KEY = 'products';

export interface ProductState extends EntityState<Product> {
  selectedId?: string | number; // which Product record has been selected
  loaded: boolean; // has the Products list been loaded
  error?: string | null; // last known error (if any)
}

export interface ProductPartialState {
  readonly [PRODUCT_FEATURE_KEY]: ProductState;
}

export const productAdapter: EntityAdapter<Product> = createEntityAdapter<Product>();

export const initialProductState: ProductState = productAdapter.getInitialState(
  {
    loaded: false,
  }
);

const onFailure = (state, { error }): ProductState => ({ ...state, error });

const onDispatch = (state, action): ProductState => ({
  ...state,
  loaded: false,
  error: null,
});

const _productsReducer = createReducer(
  initialProductState,
  on(
    ProductActions.loadProductFailure,
    ProductActions.loadProductsFailure,
    ProductActions.deleteProductFailure,
    ProductActions.updateProductFailure,
    ProductActions.createProductFailure,
    onFailure
  ),
  on(
    ProductActions.loadProduct,
    ProductActions.loadProducts,
    ProductActions.deleteProduct,
    ProductActions.updateProduct,
    ProductActions.createProduct,
    onDispatch
  ),
  on(
    ProductActions.loadProductSuccess, (state, { product }) =>
    productAdapter.upsertOne(product, { ...state, loaded: true })
  ),
  on(ProductActions.selectProduct, (state, { productId }) => ({
    ...state,
    selectedId: productId,
  })),
  on(ProductActions.loadProductsSuccess, (state, { products }) =>
    productAdapter.setAll(products, { ...state, loaded: true })
  ),
  on(ProductActions.deleteProductSuccess, (state, { product }) =>
    productAdapter.removeOne(product.id, { ...state, loaded: true })
  ),
  on(ProductActions.updateProductSuccess, (state, { product }) =>
    productAdapter.updateOne(
      { id: product.id, changes: product },
      { ...state, loaded: true }
    )
  ),
  on(ProductActions.createProductSuccess, (state, { product }) =>
    productAdapter.addOne(product, { ...state, loaded: true })
  )
);

export function productsReducer(
  state: ProductState | undefined,
  action: Action
) {
  return _productsReducer(state, action);
}