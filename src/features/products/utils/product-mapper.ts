import type { Product, ProductApi, ProductApiId, ProductImageApi } from '../types/product.types';

const unwrapId = (id: ProductApiId): string => id?.value ?? '';

const unwrapMoneyAmount = (amount: number | string): number => {
  // Use Number(...) for simplicity; backend returns high-precision decimals.
  // For UI display this is typically OK.
  const n = typeof amount === 'number' ? amount : Number(amount);
  return Number.isFinite(n) ? n : 0;
};

const unwrapSku = (sku: { value: number | string }): string => {
  const v = sku?.value;
  return typeof v === 'number' ? String(v) : v ?? '';
};

const mapImage = (img: ProductImageApi) => ({
  id: img.id,
  imageUrl: img.imageUrl,
  isPrimary: img.isPrimary,
  sortOrder: img.sortOrder,
});

export const mapProductApiToProduct = (api: ProductApi): Product => {
  return {
    id: unwrapId(api.id),
    name: api.name,
    description: api.description,
    color: api.color,
    price: unwrapMoneyAmount(api.price.amount),
    sku: unwrapSku(api.sku),
    createdDate: api.createdDate,
    primaryImageUrl: api.primaryImageUrl,
    imageUrls: api.imageUrls?.map(mapImage),
  };
};

export const mapProductsResponseToProducts = (response: {
  items: ProductApi[];
}): Product[] => response.items.map(mapProductApiToProduct);

