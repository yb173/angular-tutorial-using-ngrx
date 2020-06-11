import { Action, createReducer, on, createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../../models/product.model';
import { ECommerceActions } from '../actions';
import { ShippingCost } from '../../models/shipping-cost.model';

/**
 * Feature Key
 */
export const featureKey = 'eCommerce';

/**
 * State
 */
export interface State {
  items: Product[]; // カートに入っているアイテムのリスト
  products: Product[]; // 商品一覧画面に表示されるアイテムのリスト
  product: Product; // 商品詳細画面に表示される商品の情報
  shippingCosts: ShippingCost[]; // 配送コストの一覧
  loading: boolean; // ロード中フラグ
  error: any; // エラー
}

/**
 * Initial State
 */
export const initialState: State = {
  items: [],
  products: [],
  product: null,
  shippingCosts: [],
  loading: false,
  error: null,
};

/**
 * Reducer
 */
export const reducer = createReducer(
  initialState,
  on(ECommerceActions.loadProductsStarted, (state) => ({
    ...state,
    loading: true,
  })),
  on(ECommerceActions.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(ECommerceActions.loadProductsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ECommerceActions.loadProductStarted, (state) => ({
    ...state,
    loading: true,
  })),
  on(ECommerceActions.loadProductSuccess, (state, { product }) => ({
    ...state,
    product,
    loading: false,
  })),
  on(ECommerceActions.loadProductFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
  on(ECommerceActions.addToCart, (state, { item }) => ({
    ...state,
    items: [...state.items, item],
  })),
  on(ECommerceActions.clearCart, (state) => ({
    ...state,
    items: [],
  })),
  on(ECommerceActions.loadShippingCostsStarted, (state) => ({
    ...state,
    loading: true,
  })),
  on(ECommerceActions.loadShippingCostsSuccess, (state, { shippingCosts }) => ({
    ...state,
    shippingCosts,
    loading: false,
  })),
  on(ECommerceActions.loadShippingCostsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error,
  })),
);

/**
 * Selectors
 */
const getState = createFeatureSelector<State>(featureKey);
export const selectProducts = createSelector(getState, state => state.products);
export const selectProduct = createSelector(getState, state => state.product);
export const selectItems = createSelector(getState, state => state.items);
export const selectShippingConsts = createSelector(getState, state => state.shippingCosts);
export const selectLoading = createSelector(getState, state => state.loading);
export const selectError = createSelector(getState, state => state.error);
