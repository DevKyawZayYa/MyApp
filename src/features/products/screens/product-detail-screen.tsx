import React from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppScreen } from '../../../shared/components/ui/app-screen';
import { AppText } from '../../../shared/components/ui/app-text';
import { ErrorView } from '../../../shared/components/feedback/error-view';
import { EmptyView } from '../../../shared/components/feedback/empty-view';
import { LoadingView } from '../../../shared/components/feedback/loading-view';
import { useProductDetail } from '../hooks/use-product-detail';
import { ProductPrice } from '../components/product-price';

export const ProductDetailScreen = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const id = route?.params?.id as string | undefined;

  const { data, isLoading, isError, error } = useProductDetail(id);
  const product = data;

  return (
    <AppScreen>
      {isLoading ? (
        <LoadingView />
      ) : isError ? (
        <ErrorView
          message={(error as any)?.message ?? 'Failed to load product.'}
        />
      ) : product ? (
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerRow}>
            <Pressable onPress={() => navigation.goBack()} style={styles.backBtn}>
              <Text style={styles.backBtnText}>←</Text>
            </Pressable>
            <View style={styles.headerIcons}>
              <Text style={styles.headerIconText}>♡</Text>
              <Text style={styles.headerIconText}>🛍</Text>
            </View>
          </View>

          <View style={styles.heroWrap}>
            <Image
              source={{ uri: product.primaryImageUrl }}
              style={styles.heroImage}
              resizeMode="contain"
            />
          </View>

          <View style={styles.contentWrap}>
            <AppText variant="heading" style={styles.name}>
              {product.name}
            </AppText>

            <View style={styles.priceRatingRow}>
              <AppText variant="heading" style={styles.detailPrice}>
                ${Math.round(product.price)}
              </AppText>
              <AppText style={styles.ratingText}>5.0 | 25k+ sold</AppText>
            </View>

            <AppText style={styles.descriptionTitle}>Description</AppText>
            <AppText style={styles.descriptionText}>
              {product.description}
            </AppText>

            <View style={styles.variantBox}>
              <AppText style={styles.variantText}>Choose Variant</AppText>
              <Text style={styles.chevron}>⌄</Text>
            </View>

            <View style={styles.bottomRow}>
              <View>
                <AppText style={styles.bottomPriceLabel}>Price</AppText>
                <ProductPrice price={product.price} />
              </View>
              <Pressable style={styles.addToCartBtn}>
                <AppText style={styles.addToCartText}>Add to Cart</AppText>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      ) : (
        <EmptyView message="Product not found." />
      )}
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 4,
  },
  backBtn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
  },
  backBtnText: {
    fontSize: 24,
    color: '#111827',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  headerIconText: {
    fontSize: 18,
  },
  heroWrap: {
    width: '100%',
    height: 360,
    marginTop: 8,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  contentWrap: {
    paddingBottom: 28,
  },
  name: {
    fontSize: 30,
    lineHeight: 36,
  },
  priceRatingRow: {
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  detailPrice: {
    fontSize: 34,
    lineHeight: 38,
  },
  ratingText: {
    fontSize: 12,
    color: '#9CA3AF',
  },
  descriptionTitle: {
    marginTop: 18,
    fontSize: 16,
    fontWeight: '700',
  },
  descriptionText: {
    marginTop: 6,
    color: '#6B7280',
    lineHeight: 20,
  },
  variantBox: {
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 999,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  variantText: {
    fontWeight: '600',
  },
  chevron: {
    fontSize: 18,
    color: '#111827',
  },
  bottomRow: {
    marginTop: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomPriceLabel: {
    color: '#9CA3AF',
    fontSize: 12,
    marginBottom: 2,
  },
  addToCartBtn: {
    backgroundColor: '#111827',
    borderRadius: 999,
    paddingHorizontal: 28,
    paddingVertical: 14,
  },
  addToCartText: {
    color: '#FFF',
    fontWeight: '700',
  },
});

