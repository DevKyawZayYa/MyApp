import type { Product, ProductApi } from '../types/product.types';
import { apiClient } from '../../../shared/lib/api-client';
import { mapProductApiToProduct } from '../utils/product-mapper';

export const getProductDetailApi = async (
  id: string,
): Promise<Product> => {
  const { data } = await apiClient.get<ProductApi>(`/Products/${id}`);
  return mapProductApiToProduct(data);
};

