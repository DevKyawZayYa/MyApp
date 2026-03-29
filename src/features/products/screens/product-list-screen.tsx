import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { ArrowLeft, Bell, Search, ShoppingCart } from 'lucide-react-native';
import { ProductList } from '../components/product-list';
import { ErrorView } from '../../../shared/components/feedback/error-view';
import { EmptyView } from '../../../shared/components/feedback/empty-view';
import { LoadingView } from '../../../shared/components/feedback/loading-view';
import { AppScreen } from '../../../shared/components/ui/app-screen';
import { AppText } from '../../../shared/components/ui/app-text';
import { useProducts } from '../hooks/use-products';
import { useAppTheme } from '../../../shared/hooks/use-app-theme';

export const ProductListScreen = () => {
  const { theme } = useAppTheme();
  const { data, isLoading, isError, error } = useProducts({
    page: 1,
    pageSize: 100,
  });

  const products = data?.products ?? [];

  return (
    <AppScreen>
      <View style={styles.topBar}>
        <Pressable style={styles.circleButton}>
          <ArrowLeft color="#FFFFFF" size={18} strokeWidth={2.5} />
        </Pressable>
        <View style={styles.rightActions}>
          <ShoppingCart color="#111827" size={18} strokeWidth={2.2} />
          <Bell color="#111827" size={18} strokeWidth={2.2} />
        </View>
      </View>

      <View style={[styles.banner, { backgroundColor: '#EEF2FF' }]}>
        <AppText style={styles.bannerSub}>Last Discount</AppText>
        <AppText style={styles.bannerTitle}>up to 80%</AppText>
      </View>

      <View style={styles.sectionHeader}>
        <View>
          <AppText variant="heading" style={styles.sectionTitle}>
            Women&apos;s
          </AppText>
          <AppText style={{ color: theme.colors.mutedText, fontSize: 12 }}>
            {products.length} Women&apos;s Fashion Trends
          </AppText>
        </View>
        <Pressable style={styles.searchBtn}>
          <Search color="#FFF" size={18} strokeWidth={2.5} />
        </Pressable>
      </View>

      <View style={styles.listContainer}>
        {isLoading ? (
          <LoadingView />
        ) : isError ? (
          <ErrorView
            message={
              (error as any)?.message ??
              'Failed to load products. Please check your connection.'
            }
          />
        ) : products.length === 0 ? (
          <EmptyView message="No products found." />
        ) : (
          <ProductList products={products} />
        )}
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 12,
  },
  circleButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightActions: {
    flexDirection: 'row',
    gap: 12,
  },
  banner: {
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginBottom: 14,
  },
  bannerSub: {
    fontSize: 12,
  },
  bannerTitle: {
    fontSize: 28,
    fontWeight: '700',
    lineHeight: 32,
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 32,
    lineHeight: 36,
  },
  searchBtn: {
    width: 46,
    height: 46,
    borderRadius: 12,
    backgroundColor: '#111827',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flex: 1,
  },
});

