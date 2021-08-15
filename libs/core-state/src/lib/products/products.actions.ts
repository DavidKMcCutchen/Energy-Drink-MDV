import { Product } from "@energy-drink/api-interfaces";
import { createAction, props } from "@ngrx/store";

// Select Entity
export const selectProduct = createAction(
  '[PRODUCT] Select Product',
  props<{ productId: string }>()
);

// Load All Entities
export const loadProducts = createAction('[PRODUCT] Load Products');

export const loadProductsSuccess = createAction(
  '[PRODUCT] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[PRODUCT] Load Products Failure',
  props<{ error: any }>()
);

// Load Single Entity
export const loadProduct = createAction(
  '[PRODUCT] Load Product',
  props<{ productId: string }>()
);

export const loadProductSuccess = createAction(
  '[PRODUCT] Load Product Success',
  props<{ product: Product }>()
);

export const loadProductFailure = createAction(
  '[PRODUCT] Load Product Failure',
  props<{ error: any }>()
);

// Load Update Entity
export const updateProduct = createAction(
  '[PRODUCT] Create Product',
  props<{ product: Product }>()
);
export const updateProductSuccess = createAction(
  '[PRODUCT] Create Product Success',
  props<{ product: Product }>()
);
export const updateProductFailure = createAction(
  '[PRODUCT] Create Product Failure',
  props<{ error: any }>()
);

// Load Delete Entity
export const deleteProduct = createAction(
  '[PRODUCT] Delete Product',
  props<{ product: Product }>()
);
export const deleteProductSuccess = createAction(
  '[PRODUCT] Delete Product Success',
  props<{ product: Product }>()
);
export const deleteProductFailure = createAction(
  '[PRODUCT] Delete Product Failure',
  props<{ error: any }>()
);

// Load Create Entity
export const createProduct = createAction(
  '[PRODUCT] Update Product',
  props<{ product: Product }>()
);
export const createProductSuccess = createAction(
  '[PRODUCT] Update Product Success',
  props<{ product: Product }>()
);
export const createProductFailure = createAction(
  '[PRODUCT] Update Product Failure',
  props<{ error: any }>()
);