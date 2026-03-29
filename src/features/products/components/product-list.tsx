import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import type { Product } from '../types/product.types';
import { ProductCard } from './product-card';

type Props = {
  products: Product[];
};

const Separator = () => <View style={styles.separator} />;

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <FlatList
      style={styles.list}
      data={products}
      keyExtractor={item => item.id}
      numColumns={2}
      initialNumToRender={12}
      windowSize={9}
      showsVerticalScrollIndicator
      persistentScrollbar
      columnWrapperStyle={styles.column}
      contentContainerStyle={styles.contentContainer}
      ItemSeparatorComponent={Separator}
      renderItem={({ item }) => <ProductCard product={item} />}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  contentContainer: {
    paddingBottom: 24,
  },
  column: {
    gap: 12,
  },
  separator: {
    height: 12,
  },
});

