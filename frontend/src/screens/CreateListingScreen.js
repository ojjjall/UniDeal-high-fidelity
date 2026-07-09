// src/screens/CreateListingScreen.js
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

const CONDITIONS = ['Like New', 'Good', 'Fair', 'Needs Repair'];
const CATS = ['Textbooks', 'Electronics', 'Clothing', 'Food', 'Room', 'Services'];

export default function CreateListingScreen() {
  const [condition, setCondition] = useState('Good');
  const [category, setCategory] = useState('Textbooks');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: spacing.md }}>
      <Text style={styles.label}>Photos (min 3)</Text>
      <View style={styles.photoRow}>
        <View style={styles.photoAdd}><Ionicons name="camera" size={24} color={colors.primary} /></View>
        <View style={styles.photoBox}><Ionicons name="image" size={22} color={colors.mutedForeground} /></View>
        <View style={styles.photoBox}><Ionicons name="image" size={22} color={colors.mutedForeground} /></View>
      </View>

      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.input} placeholder="e.g. Calculus Textbook 3rd Ed." placeholderTextColor={colors.mutedForeground} />

      <Text style={styles.label}>Category</Text>
      <View style={styles.chipWrap}>
        {CATS.map((c) => (
          <TouchableOpacity key={c} style={[styles.chip, category === c && styles.chipActive]} onPress={() => setCategory(c)}>
            <Text style={[styles.chipText, category === c && styles.chipTextActive]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Condition</Text>
      <View style={styles.chipWrap}>
        {CONDITIONS.map((c) => (
          <TouchableOpacity key={c} style={[styles.chip, condition === c && styles.chipActive]} onPress={() => setCondition(c)}>
            <Text style={[styles.chipText, condition === c && styles.chipTextActive]}>{c}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.label}>Price (RM)</Text>
      <TextInput style={styles.input} placeholder="0.00" placeholderTextColor={colors.mutedForeground} keyboardType="numeric" />

      <Text style={styles.label}>Description</Text>
      <TextInput style={[styles.input, styles.textarea]} placeholder="Describe your item..." placeholderTextColor={colors.mutedForeground} multiline />

      <TouchableOpacity style={styles.button}><Text style={styles.buttonText}>Publish Listing</Text></TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  label: { ...typography.body, color: colors.foreground, fontWeight: '600', marginTop: spacing.md, marginBottom: spacing.xs },
  photoRow: { flexDirection: 'row', gap: spacing.sm },
  photoAdd: { width: 80, height: 80, borderRadius: radius.md, borderWidth: 1.5, borderColor: colors.primary, borderStyle: 'dashed', alignItems: 'center', justifyContent: 'center' },
  photoBox: { width: 80, height: 80, borderRadius: radius.md, backgroundColor: colors.muted, alignItems: 'center', justifyContent: 'center' },
  input: { borderWidth: 1, borderColor: colors.border, borderRadius: radius.sm, paddingHorizontal: spacing.md, height: 48, ...typography.body, color: colors.foreground },
  textarea: { height: 100, paddingTop: spacing.sm, textAlignVertical: 'top' },
  chipWrap: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  chip: { paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderRadius: radius.full, backgroundColor: colors.muted },
  chipActive: { backgroundColor: colors.primary },
  chipText: { ...typography.body, color: colors.mutedForeground },
  chipTextActive: { color: colors.primaryForeground, fontWeight: '600' },
  button: { backgroundColor: colors.primary, height: 50, borderRadius: radius.sm, alignItems: 'center', justifyContent: 'center', marginTop: spacing.xl, marginBottom: spacing.lg },
  buttonText: { ...typography.cardTitle, color: colors.primaryForeground },
});
