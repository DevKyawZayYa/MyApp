import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Heart } from 'lucide-react-native';
import { AppText } from '../../../shared/components/ui/app-text';
import { ProductPrice } from './product-price';
import { useAppTheme } from '../../../shared/hooks/use-app-theme';
import { useNavigation } from '@react-navigation/native';
import { AppRoute } from '../../../app/constants/app-routes';
import type { Product } from '../types/product.types';

type Props = {
  product: Product;
  onPress?: () => void;
};

export const ProductCard: React.FC<Props> = ({ product, onPress }) => {
  const { theme } = useAppTheme();
  const navigation = useNavigation<any>();
  const imageUrl =
    product.primaryImageUrl ||
    'https://via.placeholder.com/400x500.png?text=No+Image';

  const handlePress = () => {
    onPress?.();
    if (onPress) return;
    navigation.navigate(AppRoute.PRODUCT_DETAIL as never, { id: product.id } as never);
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[
        styles.card,
        {
          borderRadius: theme.radius.md,
          borderColor: theme.colors.border,
          backgroundColor: theme.colors.background,
        },
      ]}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: imageUrl }} style={styles.image} resizeMode="cover" />
        <View style={styles.favorite}>
          <Heart color="#111827" size={13} strokeWidth={2.5} />
        </View>
      </View>
      <AppText numberOfLines={1} style={styles.name}>
        {product.name}
      </AppText>
      <View style={styles.priceWrap}>
        <ProductPrice price={product.price} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    borderWidth: 1,
    padding: 8,
  },
  imageWrap: {
    height: 170,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#F3F4F6',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favorite: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '600',
  },
  priceWrap: {
    marginTop: 4,
  },
});

