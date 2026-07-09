// src/components/ProductCard.js
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.body}>
        <Text style={styles.title} numberOfLines={1}>{product.title}</Text>
        <Text style={styles.price}>RM {product.price}</Text>
        <View style={styles.metaRow}>
          <View style={styles.badge}><Text style={styles.badgeText}>{product.condition}</Text></View>
          <View style={styles.rating}>
            <Ionicons name="star" size={12} color={colors.warning} />
            <Text style={styles.ratingText}>{product.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, backgroundColor: colors.background, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, overflow: 'hidden', margin: spacing.xs },
  image: { width: '100%', height: 120, backgroundColor: colors.muted },
  body: { padding: spacing.sm },
  title: { ...typography.cardTitle, color: colors.foreground },
  price: { ...typography.price, color: colors.primary, marginTop: 2 },
  metaRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.xs },
  badge: { backgroundColor: colors.muted, borderRadius: radius.sm, paddingHorizontal: spacing.sm, paddingVertical: 2 },
  badgeText: { ...typography.caption, color: colors.mutedForeground },
  rating: { flexDirection: 'row', alignItems: 'center', gap: 2 },
  ratingText: { ...typography.caption, color: colors.foreground },
});
