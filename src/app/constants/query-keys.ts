export const QUERY_KEYS = {
  AUTH: {
    SESSION: ['auth', 'session'] as const,
  },
  USER: {
    PROFILE: ['user', 'profile'] as const,
  },
  PRODUCTS: {
    LIST: (page: number, pageSize: number) =>
      ['products', 'list', page, pageSize] as const,
    DETAIL: (id: string | number) => ['products', 'detail', id] as const,
  },
  CART: {
    ITEMS: ['cart', 'items'] as const,
  },
  ORDERS: {
    LIST: ['orders', 'list'] as const,
    DETAIL: (id: string | number) => ['orders', 'detail', id] as const,
  },
};

