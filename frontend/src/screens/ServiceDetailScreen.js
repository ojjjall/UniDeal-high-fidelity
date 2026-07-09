// src/screens/ServiceDetailScreen.js
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

export default function ServiceDetailScreen({ route, navigation }) {
  const { item, kind } = route.params;
  const isAsset = kind === 'asset';

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: spacing.md }}>
        <View style={styles.hero}>
          <View style={styles.iconBox}><Ionicons name={item.icon} size={40} color={colors.primary} /></View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.meta}>{item.meta}</Text>
        </View>

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.desc}>
          {isAsset
            ? `Rent this ${item.title.toLowerCase()} from a fellow UTM student. A refundable deposit is held in escrow and returned once the item is returned in good condition.`
            : `${item.title} offered by a verified UTM student. Book a session at a time that suits you and rate your experience afterwards.`}
        </Text>

        <View style={styles.providerCard}>
          <View style={styles.avatar}><Ionicons name="person" size={20} color={colors.primaryForeground} /></View>
          <View style={{ flex: 1 }}>
            <Text style={styles.providerName}>Verified Provider</Text>
            <View style={styles.rating}>
              <Ionicons name="star" size={12} color={colors.warning} />
              <Text style={styles.muted}>Faculty of Computing · Year 3</Text>
            </View>
          </View>
        </View>

        <View style={styles.infoRow}><Ionicons name="location-outline" size={18} color={colors.mutedForeground} /><Text style={styles.muted}>Meet-up at campus safe zone</Text></View>
        <View style={styles.infoRow}><Ionicons name="time-outline" size={18} color={colors.mutedForeground} /><Text style={styles.muted}>Available: Mon–Fri, 9am–6pm</Text></View>
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatConversation', { name: 'Provider' })}>
        <Ionicons name={isAsset ? 'cube-outline' : 'calendar-outline'} size={18} color={colors.primaryForeground} />
        <Text style={styles.buttonText}>{isAsset ? 'Request to Borrow' : 'Request Service'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  hero: { alignItems: 'center', paddingVertical: spacing.lg },
  iconBox: { width: 88, height: 88, borderRadius: radius.lg, backgroundColor: colors.muted, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md },
  title: { ...typography.pageTitle, color: colors.foreground, textAlign: 'center' },
  meta: { ...typography.body, color: colors.mutedForeground, marginTop: spacing.xs },
  sectionTitle: { ...typography.sectionHeading, color: colors.foreground, marginTop: spacing.md, marginBottom: spacing.xs },
  desc: { ...typography.body, color: colors.foreground, lineHeight: 20 },
  providerCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: spacing.lg, padding: spacing.md, borderWidth: 1, borderColor: colors.border, borderRadius: radius.md },
  avatar: { width: 40, height: 40, borderRadius: radius.full, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
  providerName: { ...typography.cardTitle, color: colors.foreground },
  rating: { flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 2 },
  muted: { ...typography.body, color: colors.mutedForeground },
  infoRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: spacing.md },
  button: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, backgroundColor: colors.primary, height: 54, margin: spacing.md, borderRadius: radius.sm },
  buttonText: { ...typography.cardTitle, color: colors.primaryForeground },
});