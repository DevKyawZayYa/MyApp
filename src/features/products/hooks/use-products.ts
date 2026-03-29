import { useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../app/constants/query-keys';
import type { Product } from '../types/product.types';
import { getProductsApi } from '../api/get-products.api';

export type UseProductsParams = {
  page?: number;
  pageSize?: number;
};

export const useProducts = ({ page = 1, pageSize = 100 }: UseProductsParams = {}) => {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS.LIST(page, pageSize),
    queryFn: () => getProductsApi({ page, pageSize }),
  });
};

export type UseProductsResult = ReturnType<typeof useProducts> & {
  data?: {
    products: Product[];
    totalItems: number;
    page: number;
    pageSize: number;
  };
};

