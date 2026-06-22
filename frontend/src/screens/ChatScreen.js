// src/screens/ChatScreen.js
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

const CHATS = [
  { id: 'c1', name: 'Ahmad F.', last: 'Is the textbook still available?', time: '2m', unread: 2 },
  { id: 'c2', name: 'Siti N.', last: 'Sure, meet at library at 3pm?', time: '1h', unread: 0 },
  { id: 'c3', name: 'Wei L.', last: 'Thanks for the lamp!', time: '3h', unread: 0 },
  { id: 'c4', name: 'Aina K.', last: 'Can you do RM100?', time: '1d', unread: 1 },
];

export default function ChatScreen({ navigation }) {
  return (
    <FlatList
      style={{ backgroundColor: colors.background }}
      data={CHATS}
      keyExtractor={(c) => c.id}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.row} onPress={() => navigation.navigate('ChatConversation', { name: item.name })}>
          <View style={styles.avatar}><Ionicons name="person" size={22} color={colors.primaryForeground} /></View>
          <View style={{ flex: 1 }}>
            <View style={styles.topRow}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.time}>{item.time}</Text>
            </View>
            <Text style={styles.last} numberOfLines={1}>{item.last}</Text>
          </View>
          {item.unread > 0 && <View style={styles.badge}><Text style={styles.badgeText}>{item.unread}</Text></View>}
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, padding: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.border },
  avatar: { width: 48, height: 48, borderRadius: radius.full, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  topRow: { flexDirection: 'row', justifyContent: 'space-between' },
  name: { ...typography.cardTitle, color: colors.foreground },
  time: { ...typography.caption, color: colors.mutedForeground },
  last: { ...typography.body, color: colors.mutedForeground, marginTop: 2 },
  badge: { backgroundColor: colors.primary, minWidth: 22, height: 22, borderRadius: radius.full, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 6 },
  badgeText: { ...typography.caption, color: colors.primaryForeground, fontWeight: '700' },
});
