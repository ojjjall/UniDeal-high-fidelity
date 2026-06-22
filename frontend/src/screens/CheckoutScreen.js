// src/screens/CheckoutScreen.js
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

const ZONES = ['Library Foyer', 'Faculty Lobby', 'KTDI Cafe', 'Arked Meranti'];
const METHODS = [
  { id: 'wallet', icon: 'wallet', label: 'In-App Wallet (Escrow)' },
  { id: 'bank', icon: 'card', label: 'Bank Transfer' },
];

export default function CheckoutScreen({ route, navigation }) {
  const { product } = route.params;
  const [zone, setZone] = useState('Library Foyer');
  const [method, setMethod] = useState('wallet');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: spacing.md }}>
        <View style={styles.summary}>
          <Image source={{ uri: product.image }} style={styles.thumb} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={2}>{product.title}</Text>
            <Text style={styles.muted}>Seller: {product.seller}</Text>
            <Text style={styles.price}>RM {product.price}</Text>
          </View>
        </View>

        <Text style={styles.label}>Meet-up Safe Zone</Text>
        <View style={styles.chipWrap}>
          {ZONES.map((z) => (
            <TouchableOpacity key={z} style={[styles.chip, zone === z && styles.chipActive]} onPress={() => setZone(z)}>
              <Text style={[styles.chipText, zone === z && styles.chipTextActive]}>{z}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.label}>Payment Method</Text>
        {METHODS.map((m) => (
          <TouchableOpacity key={m.id} style={[styles.method, method === m.id && styles.methodActive]} onPress={() => setMethod(m.id)}>
            <Ionicons name={m.icon} size={22} color={method === m.id ? colors.primary : colors.mutedForeground} />
            <Text style={[styles.methodLabel, method === m.id && { color: colors.primary, fontWeight: '600' }]}>{m.label}</Text>
            <Ionicons name={method === m.id ? 'radio-button-on' : 'radio-button-off'} size={20} color={method === m.id ? colors.primary : colors.mutedForeground} />
          </TouchableOpacity>
        ))}

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.total}>RM {product.price}</Text>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TransactionQR', { product })}>
        <Ionicons name="lock-closed" size={18} color={colors.primaryForeground} />
        <Text style={styles.buttonText}>Confirm and Pay</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  summary: { flexDirection: 'row', gap: spacing.md, padding: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md },
  thumb: { width: 70, height: 70, borderRadius: radius.sm, backgroundColor: colors.muted },
  title: { ...typography.cardTitle, color: colors.foreground },
  muted: { ...typography.caption, color: colors.mutedForeground, marginTop: 2 },
  price: { ...typography.price, color: colors.primary, marginTop: spacing.xs },
  label: { ...typography.body, color: colors.foreground, fontWeight: '600', marginTop: spacing.lg, marginBottom: spacing.sm },
  chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  chip: { paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderRadius: radius.full, backgroundColor: colors.muted },
  chipActive: { backgroundColor: colors.primary },
  chipText: { ...typography.body, color: colors.mutedForeground },
  chipTextActive: { color: colors.primaryForeground, fontWeight: '600' },
  method: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, marginBottom: spacing.sm },
  methodActive: { borderColor: colors.primary, backgroundColor: colors.muted },
  methodLabel: { ...typography.body, color: colors.foreground, flex: 1 },
  totalRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.lg, paddingTop: spacing.md, borderTopWidth: 1, borderTopColor: colors.border },
  totalLabel: { ...typography.sectionHeading, color: colors.foreground },
  total: { ...typography.sectionHeading, color: colors.primary },
  button: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, backgroundColor: colors.primary, height: 54, margin: spacing.md, borderRadius: radius.sm },
  buttonText: { ...typography.cardTitle, color: colors.primaryForeground },
});
