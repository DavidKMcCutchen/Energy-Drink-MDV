import { emptyProduct } from "@energy-drink/api-interfaces";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productAdapter, ProductState, PRODUCT_FEATURE_KEY } from "./products.reducer";

// Lookup the 'Product' feature state managed by NgRx

export const getProductState = createFeatureSelector<ProductState>(PRODUCT_FEATURE_KEY);

const { selectAll, selectEntities } = productAdapter.getSelectors();


export const getProductsLoaded = createSelector(
  getProductState,
  (state: ProductState) => state.loaded
)

export const getProductError = createSelector(
  getProductState,
  (state: ProductState) => state.error
)

export const getAllProducts = createSelector(
  getProductState,
  (state: ProductState) => selectAll(state)
)

export const getProductEntities = createSelector(
  getProductState,
  (state: ProductState) => selectEntities(state)
)

export const getSelectedProductId = createSelector(
  getProductState,
  (state: ProductState) => state.selectedId
)

export const getSelectedProduct = createSelector(
  getProductEntities,
  getSelectedProductId,
  (entities, selectedId) => (selectedId && entities[selectedId]) || emptyProduct
)