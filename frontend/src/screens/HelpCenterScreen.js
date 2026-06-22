// src/screens/HelpCenterScreen.js
import { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

const FAQ = [
  { q: 'How do I verify my student identity?', a: 'Go to Profile > Verification and upload a photo of your matric card. Verification is usually completed within 24 hours.' },
  { q: 'How does the protected payment work?', a: 'Your payment is held in escrow. Funds are only released to the seller after you scan the QR code and confirm receipt at the meet-up.' },
  { q: 'Where can I meet sellers safely?', a: 'Always meet at designated campus safe zones such as the Library Foyer or Faculty Lobby, shown during checkout.' },
  { q: 'How do I report a problem?', a: 'Use the "Report an Issue" button below, or open a dispute from your order details.' },
];

export default function HelpCenterScreen() {
  const [open, setOpen] = useState(null);
  return (
    <ScrollView style={{ backgroundColor: colors.background }} contentContainerStyle={{ padding: spacing.md }}>
      <Text style={styles.heading}>Frequently Asked Questions</Text>
      {FAQ.map((item, i) => (
        <TouchableOpacity key={i} style={styles.faq} onPress={() => setOpen(open === i ? null : i)}>
          <View style={styles.faqHead}>
            <Text style={styles.q}>{item.q}</Text>
            <Ionicons name={open === i ? 'chevron-up' : 'chevron-down'} size={18} color={colors.mutedForeground} />
          </View>
          {open === i && <Text style={styles.a}>{item.a}</Text>}
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.contactBtn}>
        <Ionicons name="chatbox-ellipses-outline" size={20} color={colors.primaryForeground} />
        <Text style={styles.contactText}>Contact Support</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.feedbackBtn}>
        <Ionicons name="heart-outline" size={20} color={colors.primary} />
        <Text style={styles.feedbackText}>Send Feedback</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  heading: { ...typography.sectionHeading, color: colors.foreground, marginBottom: spacing.sm },
  faq: { borderWidth: 1, borderColor: colors.border, borderRadius: radius.md, padding: spacing.md, marginBottom: spacing.sm },
  faqHead: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: spacing.sm },
  q: { ...typography.cardTitle, color: colors.foreground, flex: 1 },
  a: { ...typography.body, color: colors.mutedForeground, marginTop: spacing.sm, lineHeight: 20 },
  contactBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, backgroundColor: colors.primary, height: 50, borderRadius: radius.sm, marginTop: spacing.md },
  contactText: { ...typography.cardTitle, color: colors.primaryForeground },
  feedbackBtn: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: spacing.sm, height: 50, borderRadius: radius.sm, borderWidth: 1, borderColor: colors.primary, marginTop: spacing.sm },
  feedbackText: { ...typography.cardTitle, color: colors.primary },
});
