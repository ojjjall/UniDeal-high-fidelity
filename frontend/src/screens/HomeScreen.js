// src/screens/HomeScreen.js
import { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';
import { products, categories } from '../data/sampleData';
import ProductCard from '../components/ProductCard';

export default function HomeScreen({ navigation }) {
  const [activeCat, setActiveCat] = useState('All');
  const filtered = activeCat === 'All' ? products : products.filter((p) => p.category === activeCat);

  return (
    <View style={styles.container}>
      <View style={styles.searchWrap}>
        <Ionicons name="search" size={18} color={colors.mutedForeground} />
        <TextInput style={styles.search} placeholder="Search items..." placeholderTextColor={colors.mutedForeground} />
      </View>

      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categories}
          keyExtractor={(c) => c}
          contentContainerStyle={styles.chipRow}
          renderItem={({ item }) => (
            <TouchableOpacity style={[styles.chip, activeCat === item && styles.chipActive]} onPress={() => setActiveCat(item)}>
              <Text style={[styles.chipText, activeCat === item && styles.chipTextActive]}>{item}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <FlatList
        data={filtered}
        keyExtractor={(p) => p.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ paddingHorizontal: spacing.sm }}
        ListHeaderComponent={<Text style={styles.heading}>Browse Listings</Text>}
        renderItem={({ item }) => (
          <ProductCard product={item} onPress={() => navigation.navigate('ProductDetail', { product: item })} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  searchWrap: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, backgroundColor: colors.muted, margin: spacing.md, paddingHorizontal: spacing.md, height: 44, borderRadius: radius.full },
  search: { flex: 1, ...typography.body, color: colors.foreground },
  chipRow: { paddingHorizontal: spacing.md, gap: spacing.sm, paddingBottom: spacing.sm },
  chip: { paddingHorizontal: spacing.md, paddingVertical: spacing.sm, borderRadius: radius.full, backgroundColor: colors.muted },
  chipActive: { backgroundColor: colors.primary },
  chipText: { ...typography.body, color: colors.mutedForeground },
  chipTextActive: { color: colors.primaryForeground, fontWeight: '600' },
  grid: { paddingBottom: spacing.lg },
  heading: { ...typography.sectionHeading, color: colors.foreground, paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
});
