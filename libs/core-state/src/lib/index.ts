import { ActionReducerMap } from "@ngrx/store";
import * as fromProducts from './products/products.reducer';

export interface AppState {
  [fromProducts.PRODUCT_FEATURE_KEY]: fromProducts.ProductState
} 

export const reducers: ActionReducerMap<AppState> = {
  [fromProducts.PRODUCT_FEATURE_KEY]: fromProducts.productsReducer
};