// src/screens/ProfileScreen.js
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

const MENU = [
  { icon: 'pricetags-outline', label: 'My Listings', route: 'MyListings' },
  { icon: 'bar-chart-outline', label: 'My Sales', route: 'MySales' },
  { icon: 'wallet-outline', label: 'Wallet', route: 'Wallet' },
  { icon: 'shield-checkmark-outline', label: 'Verification', route: 'Verification' },
  { icon: 'notifications-outline', label: 'Notifications', route: 'Notifications' },
  { icon: 'help-circle-outline', label: 'Help Center', route: 'HelpCenter' },
];

export default function ProfileScreen({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: colors.background }}>
      <View style={styles.header}>
        <View style={styles.avatar}><Ionicons name="person" size={36} color={colors.primaryForeground} /></View>
        <View style={styles.nameRow}>
          <Text style={styles.name}>Lauza Amru</Text>
          <Ionicons name="shield-checkmark" size={18} color={colors.success} />
        </View>
        <Text style={styles.muted}>Faculty of Computing · Year 2</Text>
        <View style={styles.rating}>
          <Ionicons name="star" size={14} color={colors.warning} />
          <Text style={styles.muted}>4.8 reputation</Text>
        </View>
      </View>

      <View style={styles.stats}>
        <View style={styles.stat}><Text style={styles.statNum}>12</Text><Text style={styles.muted}>Listings</Text></View>
        <View style={styles.statDivider} />
        <View style={styles.stat}><Text style={styles.statNum}>34</Text><Text style={styles.muted}>Sales</Text></View>
        <View style={styles.statDivider} />
        <View style={styles.stat}><Text style={styles.statNum}>4.8</Text><Text style={styles.muted}>Rating</Text></View>
      </View>

      <View style={styles.menu}>
        {MENU.map((m) => (
          <TouchableOpacity key={m.label} style={styles.menuRow} onPress={() => navigation.navigate(m.route)}>
            <Ionicons name={m.icon} size={22} color={colors.primary} />
            <Text style={styles.menuLabel}>{m.label}</Text>
            <Ionicons name="chevron-forward" size={20} color={colors.mutedForeground} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logout} onPress={() => navigation.replace('Login')}>
        <Ionicons name="log-out-outline" size={20} color={colors.destructive} />
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: { alignItems: 'center', padding: spacing.lg, backgroundColor: colors.muted },
  avatar: { width: 80, height: 80, borderRadius: radius.full, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.sm },
  nameRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  name: { ...typography.pageTitle, color: colors.foreground },
  muted: { ...typography.body, color: colors.mutedForeground },
  rating: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs, marginTop: spacing.xs },
  stats: { flexDirection: 'row', backgroundColor: colors.background, paddingVertical: spacing.lg, borderBottomWidth: 1, borderBottomColor: colors.border },
  stat: { flex: 1, alignItems: 'center' },
  statNum: { ...typography.sectionHeading, color: colors.primary },
  statDivider: { width: 1, backgroundColor: colors.border },
  menu: { padding: spacing.md, gap: spacing.xs },
  menuRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingVertical: spacing.md, borderBottomWidth: 1, borderBottomColor: colors.border },
  menuLabel: { ...typography.body, color: colors.foreground, flex: 1 },
  logout: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, margin: spacing.lg, height: 50, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.destructive },
  logoutText: { ...typography.cardTitle, color: colors.destructive },
});
