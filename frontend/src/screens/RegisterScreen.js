// src/screens/RegisterScreen.js
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

export default function RegisterScreen({ navigation }) {
  const [form, setForm] = useState({ email: '', matric: '', password: '' });
  const set = (key, value) => setForm({ ...form, [key]: value });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Text style={styles.subtitle}>Join the UTM campus marketplace</Text>

      <Text style={styles.label}>UTM Email</Text>
      <View style={styles.inputWrap}>
        <Ionicons name="mail-outline" size={20} color={colors.mutedForeground} />
        <TextInput style={styles.input} placeholder="youremail@graduate.utm.my"
          placeholderTextColor={colors.mutedForeground} value={form.email}
          onChangeText={(v) => set('email', v)} autoCapitalize="none" keyboardType="email-address" />
      </View>

      <Text style={styles.label}>Matric Number</Text>
      <View style={styles.inputWrap}>
        <Ionicons name="card-outline" size={20} color={colors.mutedForeground} />
        <TextInput style={styles.input} placeholder="A24CS1234"
          placeholderTextColor={colors.mutedForeground} value={form.matric}
          onChangeText={(v) => set('matric', v)} autoCapitalize="characters" />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputWrap}>
        <Ionicons name="lock-closed-outline" size={20} color={colors.mutedForeground} />
        <TextInput style={styles.input} placeholder="Create a strong password"
          placeholderTextColor={colors.mutedForeground} value={form.password}
          onChangeText={(v) => set('password', v)} secureTextEntry />
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <View style={styles.loginRow}>
        <Text style={styles.body}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.link}>Log In</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: colors.background, padding: spacing.lg, justifyContent: 'center' },
  title: { ...typography.pageTitle, color: colors.primary, textAlign: 'center' },
  subtitle: { ...typography.body, color: colors.mutedForeground, textAlign: 'center', marginTop: spacing.xs, marginBottom: spacing.lg },
  label: { ...typography.body, color: colors.foreground, fontWeight: '600', marginTop: spacing.md, marginBottom: spacing.xs },
  inputWrap: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.border, borderRadius: radius.sm, paddingHorizontal: spacing.md, height: 48, gap: spacing.sm },
  input: { flex: 1, ...typography.body, color: colors.foreground },
  button: { backgroundColor: colors.primary, height: 50, borderRadius: radius.sm, alignItems: 'center', justifyContent: 'center', marginTop: spacing.lg },
  buttonText: { ...typography.cardTitle, color: colors.primaryForeground },
  body: { ...typography.body, color: colors.foreground },
  link: { ...typography.body, color: colors.primary, fontWeight: '600' },
  loginRow: { flexDirection: 'row', justifyContent: 'center', marginTop: spacing.lg },
});
