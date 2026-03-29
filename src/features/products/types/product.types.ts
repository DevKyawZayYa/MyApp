export type ProductId = string;

// Backend DTO types (based on Swagger response)
export type ProductApiId = { value: string };
export type MoneyApi = { amount: number | string };
export type SkuApi = { value: number | string };

export type ProductImageApi = {
  id: string;
  productId: ProductApiId;
  imageUrl: string;
  isPrimary: boolean;
  sortOrder: number;
};

export type ProductApi = {
  id: ProductApiId;
  name: string;
  description: string;
  color: string;
  price: MoneyApi;
  sku: SkuApi;
  createdDate: string;
  primaryImageUrl: string;
  imageUrls?: ProductImageApi[];
};

export type Product = {
  id: ProductId;
  name: string;
  description: string;
  color: string;
  price: number;
  sku: string;
  createdDate: string;
  primaryImageUrl: string;
  imageUrls?: Array<{
    id: string;
    imageUrl: string;
    isPrimary: boolean;
    sortOrder: number;
  }>;
};

