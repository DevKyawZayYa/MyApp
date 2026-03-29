import { useQuery } from '@tanstack/react-query';
import type { Product } from '../types/product.types';
import { QUERY_KEYS } from '../../../app/constants/query-keys';
import { getProductDetailApi } from '../api/get-product-detail.api';

export const useProductDetail = (id?: string) => {
  return useQuery({
    queryKey: QUERY_KEYS.PRODUCTS.DETAIL(id ?? ''),
    queryFn: () => {
      if (!id) throw new Error('Missing product id');
      return getProductDetailApi(id);
    },
    enabled: Boolean(id),
  });
};

export type UseProductDetailResult = ReturnType<typeof useProductDetail> & {
  data?: Product;
};

