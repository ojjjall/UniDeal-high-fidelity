// src/screens/MySalesScreen.js
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

const BARS = [
  { day: 'Mon', value: 40 }, { day: 'Tue', value: 65 }, { day: 'Wed', value: 30 },
  { day: 'Thu', value: 80 }, { day: 'Fri', value: 55 }, { day: 'Sat', value: 95 }, { day: 'Sun', value: 70 },
];
const MAX = 100;

export default function MySalesScreen() {
  return (
    <ScrollView style={{ backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.md }}>
      <View style={styles.statRow}>
        <View style={styles.statCard}><Ionicons name="cash-outline" size={20} color={colors.primary} /><Text style={styles.statNum}>RM 880</Text><Text style={styles.muted}>Revenue</Text></View>
        <View style={styles.statCard}><Ionicons name="cube-outline" size={20} color={colors.primary} /><Text style={styles.statNum}>34</Text><Text style={styles.muted}>Items Sold</Text></View>
      </View>
      <View style={styles.statRow}>
        <View style={styles.statCard}><Ionicons name="eye-outline" size={20} color={colors.primary} /><Text style={styles.statNum}>1.2k</Text><Text style={styles.muted}>Views</Text></View>
        <View style={styles.statCard}><Ionicons name="star-outline" size={20} color={colors.primary} /><Text style={styles.statNum}>4.8</Text><Text style={styles.muted}>Avg Rating</Text></View>
      </View>

      <Text style={styles.heading}>This Week's Sales</Text>
      <View style={styles.chart}>
        {BARS.map((b) => (
          <View key={b.day} style={styles.barCol}>
            <View style={styles.barTrack}>
              <View style={[styles.barFill, { height: `${(b.value / MAX) * 100}%` }]} />
            </View>
            <Text style={styles.barLabel}>{b.day}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  statRow: { flexDirection: 'row', gap: spacing.sm, marginBottom: spacing.sm },
  statCard: { flex: 1, backgroundColor: colors.muted, borderRadius: radius.md, padding: spacing.md, gap: spacing.xs },
  statNum: { ...typography.sectionHeading, color: colors.foreground },
  muted: { ...typography.caption, color: colors.mutedForeground },
  heading: { ...typography.sectionHeading, color: colors.foreground, marginTop: spacing.lg, marginBottom: spacing.md },
  chart: { flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', height: 180, paddingHorizontal: spacing.xs },
  barCol: { flex: 1, alignItems: 'center', gap: spacing.xs },
  barTrack: { width: 22, height: 140, backgroundColor: colors.muted, borderRadius: radius.sm, justifyContent: 'flex-end', overflow: 'hidden' },
  barFill: { width: '100%', backgroundColor: colors.primary, borderRadius: radius.sm },
  barLabel: { ...typography.caption, color: colors.mutedForeground },
});
