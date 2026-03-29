import type { Product, ProductApi } from '../types/product.types';
import { apiClient } from '../../../shared/lib/api-client';
import { mapProductsResponseToProducts } from '../utils/product-mapper';

export type GetProductsParams = {
  page?: number;
  pageSize?: number;
};

export type GetProductsApiResponse = {
  items: ProductApi[];
  totalItems: number;
  page: number;
  pageSize: number;
};

export const getProductsApi = async ({
  page = 1,
  pageSize = 100,
}: GetProductsParams): Promise<{
  products: Product[];
  totalItems: number;
  page: number;
  pageSize: number;
}> => {
  const { data } = await apiClient.get<GetProductsApiResponse>(
    `/Products`,
    {
      params: { page, pageSize },
    },
  );

  return {
    products: mapProductsResponseToProducts(data),
    totalItems: data.totalItems,
    page: data.page,
    pageSize: data.pageSize,
  };
};

