// src/screens/ProductDetailScreen.js
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;
  return (
    <View style={styles.container}>
      <ScrollView>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View style={styles.body}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>RM {product.price}</Text>
          <View style={styles.badge}><Text style={styles.badgeText}>Condition: {product.condition}</Text></View>

          <View style={styles.locationRow}>
            <Ionicons name="location-outline" size={16} color={colors.mutedForeground} />
            <Text style={styles.muted}>{product.location}</Text>
          </View>

          <Text style={styles.descTitle}>Description</Text>
          <Text style={styles.desc}>Gently used {product.title.toLowerCase()}, in {product.condition.toLowerCase()} condition. Meet-up available at designated campus safe zones.</Text>

          <View style={styles.sellerCard}>
            <View style={styles.avatar}><Ionicons name="person" size={20} color={colors.primaryForeground} /></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.sellerName}>{product.seller}</Text>
              <View style={styles.rating}>
                <Ionicons name="star" size={12} color={colors.warning} />
                <Text style={styles.muted}>{product.rating} · Verified seller</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.msgBtn} onPress={() => navigation.navigate('ChatConversation', { name: product.seller })}>
          <Ionicons name="chatbubble-outline" size={20} color={colors.primary} />
          <Text style={styles.msgText}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyBtn} onPress={() => navigation.navigate('Checkout', { product })}>
          <Text style={styles.buyText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  image: { width: '100%', height: 280, backgroundColor: colors.muted },
  body: { padding: spacing.md },
  title: { ...typography.pageTitle, color: colors.foreground },
  price: { ...typography.pageTitle, color: colors.primary, marginTop: spacing.xs },
  badge: { alignSelf: 'flex-start', backgroundColor: colors.muted, borderRadius: radius.sm, paddingHorizontal: spacing.md, paddingVertical: spacing.xs, marginTop: spacing.sm },
  badgeText: { ...typography.caption, color: colors.mutedForeground },
  locationRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs, marginTop: spacing.sm },
  muted: { ...typography.body, color: colors.mutedForeground },
  descTitle: { ...typography.sectionHeading, color: colors.foreground, marginTop: spacing.lg, marginBottom: spacing.xs },
  desc: { ...typography.body, color: colors.foreground, lineHeight: 20 },
  sellerCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: spacing.lg, padding: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md },
  avatar: { width: 40, height: 40, borderRadius: radius.full, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  sellerName: { ...typography.cardTitle, color: colors.foreground },
  rating: { flexDirection: 'row', alignItems: 'center', gap: 2, marginTop: 2 },
  actionBar: { flexDirection: 'row', gap: spacing.sm, padding: spacing.md, borderTopWidth: 1, borderTopColor: colors.border },
  msgBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.xs, paddingHorizontal: spacing.lg, height: 50, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.primary },
  msgText: { ...typography.cardTitle, color: colors.primary },
  buyBtn: { flex: 1, backgroundColor: colors.primary, height: 50, borderRadius: radius.sm, alignItems: 'center', justifyContent: 'center' },
  buyText: { ...typography.cardTitle, color: colors.primaryForeground },
});
