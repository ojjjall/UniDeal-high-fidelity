// src/screens/MyListingsScreen.js
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';
import { products } from '../data/sampleData';

export default function MyListingsScreen({ navigation }) {
  const mine = products.slice(0, 4);
  return (
    <FlatList
      style={{ backgroundColor: colors.background }}
      data={mine}
      keyExtractor={(p) => p.id}
      contentContainerStyle={{ padding: spacing.md, gap: spacing.sm }}
      renderItem={({ item }) => (
        <View style={styles.row}>
          <Image source={{ uri: item.image }} style={styles.thumb} />
          <View style={{ flex: 1 }}>
            <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.price}>RM {item.price}</Text>
            <View style={styles.statusBadge}><Text style={styles.statusText}>Active</Text></View>
          </View>
          <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('ProductDetail', { product: item })}>
            <Ionicons name="create-outline" size={20} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="trash-outline" size={20} color={colors.destructive} />
          </TouchableOpacity>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, padding: spacing.sm, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md },
  thumb: { width: 64, height: 64, borderRadius: radius.sm, backgroundColor: colors.muted },
  title: { ...typography.cardTitle, color: colors.foreground },
  price: { ...typography.price, color: colors.primary, marginTop: 2 },
  statusBadge: { alignSelf: 'flex-start', backgroundColor: '#DCFCE7', borderRadius: radius.sm, paddingHorizontal: spacing.sm, paddingVertical: 2, marginTop: 4 },
  statusText: { ...typography.caption, color: '#15803D', fontWeight: '600' },
  iconBtn: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
});
