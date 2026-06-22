// src/screens/ChatConversationScreen.js
import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing, radius } from '../theme/theme';

const INITIAL = [
  { id: 'm1', text: 'Hi! Is the textbook still available?', mine: true },
  { id: 'm2', text: 'Yes it is! When can you meet?', mine: false },
  { id: 'm3', text: 'Tomorrow at the library foyer?', mine: true },
  { id: 'm4', text: 'Sure, 3pm works for me', mine: false },
];

export default function ChatConversationScreen() {
  const [messages, setMessages] = useState(INITIAL);
  const [text, setText] = useState('');

  const send = () => {
    if (!text.trim()) return;
    setMessages([...messages, { id: Date.now().toString(), text, mine: true }]);
    setText('');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
      <FlatList
        data={messages}
        keyExtractor={(m) => m.id}
        contentContainerStyle={{ padding: spacing.md, gap: spacing.sm }}
        renderItem={({ item }) => (
          <View style={[styles.bubble, item.mine ? styles.mine : styles.theirs]}>
            <Text style={[styles.bubbleText, item.mine && { color: colors.primaryForeground }]}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputBar}>
        <TextInput style={styles.input} placeholder="Type a message..." placeholderTextColor={colors.mutedForeground} value={text} onChangeText={setText} />
        <TouchableOpacity style={styles.sendBtn} onPress={send}>
          <Ionicons name="send" size={20} color={colors.primaryForeground} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  bubble: { maxWidth: '78%', padding: spacing.md, borderRadius: radius.md },
  mine: { alignSelf: 'flex-end', backgroundColor: colors.primary, borderBottomRightRadius: 4 },
  theirs: { alignSelf: 'flex-start', backgroundColor: colors.muted, borderBottomLeftRadius: 4 },
  bubbleText: { ...typography.body, color: colors.foreground },
  inputBar: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, padding: spacing.sm, borderTopWidth: 1, borderTopColor: colors.border },
  input: { flex: 1, backgroundColor: colors.muted, borderRadius: radius.full, paddingHorizontal: spacing.md, height: 44, ...typography.body, color: colors.foreground },
  sendBtn: { width: 44, height: 44, borderRadius: radius.full, backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center' },
});
