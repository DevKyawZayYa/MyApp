import type { AppRoute } from '../constants/app-routes';

export type MainTabParamList = {
  [AppRoute.PRODUCTS_STACK]: undefined;
  [AppRoute.ORDERS_STACK]: undefined;
  [AppRoute.CART]: undefined;
  [AppRoute.PROFILE]: undefined;
};
