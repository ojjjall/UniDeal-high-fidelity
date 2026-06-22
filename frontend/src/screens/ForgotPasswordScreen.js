// src/screens/ForgotPasswordScreen.js
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

export default function ForgotPasswordScreen({ navigation }) {
  const [sent, setSent] = useState(false);
  const [email, setEmail] = useState('');

  if (sent) {
    return (
      <View style={styles.center}>
        <View style={styles.iconCircle}><Ionicons name="mail-open" size={40} color={colors.primaryForeground} /></View>
        <Text style={styles.title}>Check your email</Text>
        <Text style={styles.muted}>We sent a password reset link to{'\n'}{email || 'your UTM email'}.</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.muted}>Enter your UTM email and we'll send you a reset link.</Text>

      <Text style={styles.label}>UTM Email</Text>
      <View style={styles.inputWrap}>
        <Ionicons name="mail-outline" size={20} color={colors.mutedForeground} />
        <TextInput style={styles.input} placeholder="youremail@graduate.utm.my"
          placeholderTextColor={colors.mutedForeground} value={email} onChangeText={setEmail}
          autoCapitalize="none" keyboardType="email-address" />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => setSent(true)}>
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg, justifyContent: 'center' },
  center: { flex: 1, backgroundColor: colors.background, padding: spacing.lg, alignItems: 'center', justifyContent: 'center', gap: spacing.sm },
  iconCircle: { width: 80, height: 80, borderRadius: radius.full, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center', marginBottom: spacing.md },
  title: { ...typography.pageTitle, color: colors.foreground, textAlign: 'center' },
  muted: { ...typography.body, color: colors.mutedForeground, textAlign: 'center', marginTop: spacing.xs },
  label: { ...typography.body, color: colors.foreground, fontWeight: '600', marginTop: spacing.lg, marginBottom: spacing.xs },
  inputWrap: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.border, borderRadius: radius.sm, paddingHorizontal: spacing.md, height: 48, gap: spacing.sm },
  input: { flex: 1, ...typography.body, color: colors.foreground },
  button: { backgroundColor: colors.primary, height: 50, borderRadius: radius.sm, alignItems: 'center', justifyContent: 'center', marginTop: spacing.lg, paddingHorizontal: spacing.xl },
  buttonText: { ...typography.cardTitle, color: colors.primaryForeground },
});
