// src/screens/WalletScreen.js
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';
import { walletTx } from '../data/sampleData';

export default function WalletScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Available Balance</Text>
        <Text style={styles.balance}>RM 102.00</Text>
        <TouchableOpacity style={styles.topUp} onPress={() => navigation.navigate('TopUp')}>
          <Ionicons name="add" size={18} color={colors.primary} />
          <Text style={styles.topUpText}>Top Up</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.heading}>Transaction History</Text>
      <FlatList
        data={walletTx}
        keyExtractor={(t) => t.id}
        contentContainerStyle={{ paddingHorizontal: spacing.md }}
        renderItem={({ item }) => (
          <View style={styles.txRow}>
            <View style={[styles.txIcon, { backgroundColor: item.type === 'in' ? '#DCFCE7' : colors.muted }]}>
              <Ionicons name={item.type === 'in' ? 'arrow-down' : 'arrow-up'} size={18} color={item.type === 'in' ? colors.success : colors.mutedForeground} />
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.txLabel}>{item.label}</Text>
              <Text style={styles.muted}>{item.date}</Text>
            </View>
            <Text style={[styles.txAmount, { color: item.type === 'in' ? colors.success : colors.foreground }]}>
              {item.type === 'in' ? '+' : '-'}RM {item.amount}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  card: { backgroundColor: colors.primary, margin: spacing.md, borderRadius: radius.lg, padding: spacing.lg },
  cardLabel: { ...typography.body, color: colors.primaryForeground, opacity: 0.85 },
  balance: { fontSize: 36, fontWeight: '700', color: colors.primaryForeground, marginTop: spacing.xs },
  topUp: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.xs, backgroundColor: colors.primaryForeground, alignSelf: 'flex-start', paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderRadius: radius.sm, marginTop: spacing.md },
  topUpText: { ...typography.body, color: colors.primary, fontWeight: '700' },
  heading: { ...typography.sectionHeading, color: colors.foreground, paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  txRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.sm, borderBottomWidth: 1, borderBottomColor: colors.border },
  txIcon: { width: 40, height: 40, borderRadius: radius.full, alignItems: 'center', justifyContent: 'center' },
  txLabel: { ...typography.body, color: colors.foreground, fontWeight: '500' },
  muted: { ...typography.caption, color: colors.mutedForeground, marginTop: 2 },
  txAmount: { ...typography.cardTitle },
});
