// src/screens/LoginScreen.js
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <View style={styles.logoWrap}>
        <Image source={require('../../assets/logo.png')} style={styles.logoImage} />
        <Text style={styles.brand}>UniDeal</Text>
        <Text style={styles.tagline}>Your campus marketplace</Text>
      </View>

      <Text style={styles.label}>Email</Text>
      <View style={styles.inputWrap}>
        <Ionicons name="mail-outline" size={20} color={colors.mutedForeground} />
        <TextInput style={styles.input} placeholder="youremail@graduate.utm.my"
          placeholderTextColor={colors.mutedForeground} value={email} onChangeText={setEmail}
          autoCapitalize="none" keyboardType="email-address" />
      </View>

      <Text style={styles.label}>Password</Text>
      <View style={styles.inputWrap}>
        <Ionicons name="lock-closed-outline" size={20} color={colors.mutedForeground} />
        <TextInput style={styles.input} placeholder="your password"
          placeholderTextColor={colors.mutedForeground} value={password} onChangeText={setPassword}
          secureTextEntry={!showPassword} />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'} size={20} color={colors.mutedForeground} />
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={styles.remember} onPress={() => setRemember(!remember)}>
          <Ionicons name={remember ? 'checkbox' : 'square-outline'} size={20}
            color={remember ? colors.primary : colors.mutedForeground} />
          <Text style={styles.rememberText}>Remember me</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.link}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.signupRow}>
        <Text style={styles.body}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background, padding: spacing.lg, justifyContent: 'center' },
  logoWrap: { alignItems: 'center', marginBottom: spacing.xl },
  logoImage: { width: 96, height: 96, resizeMode: 'contain', marginBottom: spacing.md },
  brand: { ...typography.pageTitle, color: colors.primary },
  tagline: { ...typography.body, color: colors.mutedForeground, marginTop: spacing.xs },
  label: { ...typography.body, color: colors.foreground, marginBottom: spacing.xs, marginTop: spacing.md, fontWeight: '600' },
  inputWrap: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.border, borderRadius: radius.sm, paddingHorizontal: spacing.md, height: 48, gap: spacing.sm },
  input: { flex: 1, ...typography.body, color: colors.foreground },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: spacing.md },
  remember: { flexDirection: 'row', alignItems: 'center', gap: spacing.xs },
  rememberText: { ...typography.body, color: colors.mutedForeground },
  link: { ...typography.body, color: colors.primary, fontWeight: '600' },
  button: { backgroundColor: colors.primary, height: 50, borderRadius: radius.sm, alignItems: 'center', justifyContent: 'center', marginTop: spacing.lg },
  buttonText: { ...typography.cardTitle, color: colors.primaryForeground },
  body: { ...typography.body, color: colors.foreground },
  signupRow: { flexDirection: 'row', justifyContent: 'center', marginTop: spacing.lg },
});