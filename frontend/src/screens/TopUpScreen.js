// src/screens/TopUpScreen.js
import { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

const AMOUNTS = [10, 20, 50, 100, 200, 500];

export default function TopUpScreen({ navigation }) {
  const [amount, setAmount] = useState(50);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select Amount (RM)</Text>
      <View style={styles.grid}>
        {AMOUNTS.map((a) => (
          <TouchableOpacity key={a} style={[styles.amountBox, amount === a && styles.amountActive]} onPress={() => setAmount(a)}>
            <Text style={[styles.amountText, amount === a && styles.amountTextActive]}>RM {a}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Payment Method</Text>
      <View style={styles.method}>
        <Ionicons name="card" size={22} color={colors.primary} />
        <Text style={styles.methodLabel}>Online Banking (FPX)</Text>
        <Ionicons name="radio-button-on" size={20} color={colors.primary} />
      </View>

      <View style={{ flex: 1 }} />
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Top Up RM {amount}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.md },
  label: { ...typography.body, color: colors.foreground, fontWeight: '600', marginTop: spacing.md, marginBottom: spacing.sm },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  amountBox: { width: '31%', height: 56, borderRadius: radius.md, borderWidth: 1, borderColor: colors.border, alignItems: 'center', justifyContent: 'center' },
  amountActive: { borderColor: colors.primary, backgroundColor: colors.muted },
  amountText: { ...typography.cardTitle, color: colors.foreground },
  amountTextActive: { color: colors.primary },
  method: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, padding: spacing.md, borderWidth: 1, borderColor: colors.primary, borderRadius: radius.md, backgroundColor: colors.muted },
  methodLabel: { ...typography.body, color: colors.foreground, flex: 1 },
  button: { backgroundColor: colors.primary, height: 54, borderRadius: radius.sm, alignItems: 'center', justifyContent: 'center' },
  buttonText: { ...typography.cardTitle, color: colors.primaryForeground },
});
