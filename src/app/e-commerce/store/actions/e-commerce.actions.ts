import { createAction, props } from '@ngrx/store';

import { Product } from '../../models/product.model';
import { ShippingCost } from '../../models/shipping-cost.model';

/**
 * 製品一覧ロード（開始）
 */
export const loadProductsStarted = createAction(
  '[E-Commerce] Load Products Started',
);

/**
 * 製品一覧ロード（成功）
 */
export const loadProductsSuccess = createAction(
  '[E-Commerce/API] Load Products Started',
  props<{ products: Product[] }>()
);

/**
 * 製品一覧ロード（失敗）
 */
export const loadProductsFailure = createAction(
  '[E-Commerce/API] Load Products Failure',
  props<{ error: any }>()
);

/**
 * 製品ロード（開始）
 */
export const loadProductStarted = createAction(
  '[E-Commerce] Load Product Started',
  props<{ productId: number }>()
);

/**
 * 製品ロード（開始）
 */
export const loadProductSuccess = createAction(
  '[E-Commerce/API] Load Product Started',
  props<{ product: Product }>()
);

/**
 * 製品ロード（失敗）
 */
export const loadProductFailure = createAction(
  '[E-Commerce/API] Load Product Failure',
  props<{ error: any }>()
);

/**
 * カートにアイテムを追加
 */
export const addToCart = createAction(
  '[E-Commerce] Add To Cart',
  props<{ item: Product }>()
);

/**
 * カートのアイテム一覧を取得
 */
export const getItems = createAction(
  '[E-Commerce] Get Items',
);

/**
 * カートのアイテムをクリア
 */
export const clearCart = createAction(
  '[E-Commerce]  Clear Cart',
);

/**
 * 配送料一覧を取得（開始）
 */
export const loadShippingCostsStarted = createAction(
  '[E-Commerce] Load Shipping Costs Started',
);

/**
 * 配送料一覧を取得（成功）
 */
export const loadShippingCostsSuccess = createAction(
  '[E-Commerce] Load Shipping Costs Success',
  props<{ shippingCosts: ShippingCost[] }>()
);
/**
 * 配送料一覧を取得（失敗）
 */
export const loadShippingCostsFailure = createAction(
  '[E-Commerce] Load Shipping Costs Failure',
  props<{ error: any }>()
);
