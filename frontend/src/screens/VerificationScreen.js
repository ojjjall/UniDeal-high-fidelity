// src/screens/VerificationScreen.js
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

export default function VerificationScreen() {
  const [verified, setVerified] = useState(false);

  return (
    <View style={styles.container}>
      <View style={[styles.statusCard, verified ? styles.okCard : styles.pendingCard]}>
        <Ionicons name={verified ? 'shield-checkmark' : 'time'} size={28} color={verified ? colors.success : colors.warning} />
        <View style={{ flex: 1 }}>
          <Text style={styles.statusTitle}>{verified ? 'Identity Verified' : 'Pending Verification'}</Text>
          <Text style={styles.muted}>{verified ? 'You now have full access to UniDeal.' : 'Submit your matric card to get verified.'}</Text>
        </View>
      </View>

      <Text style={styles.label}>Matric Number</Text>
      <View style={styles.readonly}><Text style={styles.readonlyText}>A24CS4018</Text><Ionicons name="lock-closed" size={16} color={colors.mutedForeground} /></View>

      <Text style={styles.label}>Upload Matric Card</Text>
      <TouchableOpacity style={styles.upload}>
        <Ionicons name="cloud-upload-outline" size={32} color={colors.primary} />
        <Text style={styles.uploadText}>Tap to upload (JPEG/PNG)</Text>
      </TouchableOpacity>

      <View style={{ flex: 1 }} />
      {!verified && (
        <TouchableOpacity style={styles.button} onPress={() => setVerified(true)}>
          <Text style={styles.buttonText}>Submit for Verification</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.md },
  statusCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md, borderRadius: radius.md },
  pendingCard: { backgroundColor: '#FEF3C7' },
  okCard: { backgroundColor: '#DCFCE7' },
  statusTitle: { ...typography.cardTitle, color: colors.foreground },
  muted: { ...typography.caption, color: colors.mutedForeground, marginTop: 2 },
  label: { ...typography.body, color: colors.foreground, fontWeight: '600', marginTop: spacing.lg, marginBottom: spacing.xs },
  readonly: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: colors.muted, borderRadius: radius.sm, paddingHorizontal: spacing.md, height: 48 },
  readonlyText: { ...typography.body, color: colors.mutedForeground },
  upload: { alignItems: 'center', justifyContent: 'center', gap: spacing.sm, borderWidth: 1.5, borderColor: colors.primary, borderStyle: 'dashed', borderRadius: radius.md, paddingVertical: spacing.xl },
  uploadText: { ...typography.body, color: colors.primary },
  button: { backgroundColor: colors.primary, height: 54, borderRadius: radius.sm, alignItems: 'center', justifyContent: 'center' },
  buttonText: { ...typography.cardTitle, color: colors.primaryForeground },
});
