// src/screens/TransactionQRScreen.js
import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

export default function TransactionQRScreen({ route, navigation }) {
  const { product } = route.params;
  const [done, setDone] = useState(false);
  const qr = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=UNIDEAL-TXN-${product.id}`;

  if (done) {
    return (
      <View style={styles.center}>
        <View style={styles.successCircle}><Ionicons name="checkmark" size={48} color={colors.primaryForeground} /></View>
        <Text style={styles.successTitle}>Transaction Complete!</Text>
        <Text style={styles.muted}>Funds released to {product.seller}.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.buttonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.center}>
      <View style={styles.escrowBanner}>
        <Ionicons name="lock-closed" size={18} color={colors.primary} />
        <Text style={styles.escrowText}>RM {product.price} held safely in escrow</Text>
      </View>

      <Text style={styles.title}>Meet-up Handover</Text>
      <Text style={styles.muted}>Scan this QR at the meet-up to confirm the exchange.</Text>

      <Image source={{ uri: qr }} style={styles.qr} />

      <Text style={styles.muted}>Funds release to the seller only after you confirm receipt.</Text>

      <TouchableOpacity style={styles.button} onPress={() => setDone(true)}>
        <Ionicons name="checkmark-circle" size={18} color={colors.primaryForeground} />
        <Text style={styles.buttonText}>Confirm Receipt</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, backgroundColor: colors.background, alignItems: 'center', justifyContent: 'center', padding: spacing.lg, gap: spacing.md },
  escrowBanner: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, backgroundColor: colors.muted, paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderRadius: radius.full },
  escrowText: { ...typography.body, color: colors.primary, fontWeight: '600' },
  title: { ...typography.pageTitle, color: colors.foreground, marginTop: spacing.md },
  muted: { ...typography.body, color: colors.mutedForeground, textAlign: 'center' },
  qr: { width: 220, height: 220, marginVertical: spacing.md },
  button: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, backgroundColor: colors.primary, height: 54, borderRadius: radius.sm, paddingHorizontal: spacing.xl, marginTop: spacing.md },
  buttonText: { ...typography.cardTitle, color: colors.primaryForeground },
  successCircle: { width: 96, height: 96, borderRadius: radius.full, backgroundColor: colors.success, alignItems: 'center', justifyContent: 'center' },
  successTitle: { ...typography.pageTitle, color: colors.foreground, marginTop: spacing.md },
});
