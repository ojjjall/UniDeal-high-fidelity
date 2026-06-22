// src/screens/NotificationsScreen.js
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';
import { notifications } from '../data/sampleData';

export default function NotificationsScreen() {
  return (
    <FlatList
      style={{ backgroundColor: colors.background }}
      data={notifications}
      keyExtractor={(n) => n.id}
      renderItem={({ item }) => (
        <View style={[styles.row, item.unread && styles.unread]}>
          <View style={styles.iconBox}><Ionicons name={item.icon} size={20} color={colors.primary} /></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.time}>{item.time} ago</Text>
          </View>
          {item.unread && <View style={styles.dot} />}
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, padding: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.border },
  unread: { backgroundColor: '#EFF6FF' },
  iconBox: { width: 40, height: 40, borderRadius: radius.full, backgroundColor: colors.muted, alignItems: 'center', justifyContent: 'center' },
  title: { ...typography.body, color: colors.foreground },
  time: { ...typography.caption, color: colors.mutedForeground, marginTop: 2 },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: colors.primary },
});
