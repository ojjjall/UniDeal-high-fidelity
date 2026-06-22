// src/screens/ServicesScreen.js
import { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

const SERVICES = [
  { id: 's1', icon: 'book', title: 'Calculus Tutoring', meta: 'Provider · 4.9 · RM15/hr' },
  { id: 's2', icon: 'people', title: 'Physics Study Group', meta: 'Provider · 4.7 · Free' },
  { id: 's3', icon: 'document-text', title: 'Programming Notes', meta: 'Provider · 4.8 · RM5' },
];
const ASSETS = [
  { id: 'a1', icon: 'calculator', title: 'Scientific Calculator', meta: 'Deposit RM30 · Available' },
  { id: 'a2', icon: 'flask', title: 'Lab Coat (L)', meta: 'Deposit RM20 · Available' },
  { id: 'a3', icon: 'hardware-chip', title: 'Arduino Kit', meta: 'Deposit RM50 · Booked' },
];

export default function ServicesScreen() {
  const [tab, setTab] = useState('Academic');
  const data = tab === 'Academic' ? SERVICES : ASSETS;

  return (
    <View style={styles.container}>
      <View style={styles.segment}>
        {['Academic', 'Assets'].map((t) => (
          <TouchableOpacity key={t} style={[styles.segBtn, tab === t && styles.segActive]} onPress={() => setTab(t)}>
            <Text style={[styles.segText, tab === t && styles.segTextActive]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={data}
        keyExtractor={(i) => i.id}
        contentContainerStyle={{ padding: spacing.md, gap: spacing.sm }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.row}>
            <View style={styles.iconBox}><Ionicons name={item.icon} size={22} color={colors.primary} /></View>
            <View style={{ flex: 1 }}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.meta}>{item.meta}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.mutedForeground} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  segment: { flexDirection: 'row', backgroundColor: colors.muted, margin: spacing.md, borderRadius: radius.full, padding: 4 },
  segBtn: { flex: 1, paddingVertical: spacing.sm, alignItems: 'center', borderRadius: radius.full },
  segActive: { backgroundColor: colors.primary },
  segText: { ...typography.body, color: colors.mutedForeground, fontWeight: '600' },
  segTextActive: { color: colors.primaryForeground },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, padding: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md },
  iconBox: { width: 44, height: 44, borderRadius: radius.md, backgroundColor: colors.muted, alignItems: 'center', justifyContent: 'center' },
  title: { ...typography.cardTitle, color: colors.foreground },
  meta: { ...typography.caption, color: colors.mutedForeground, marginTop: 2 },
});
