import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [status, setStatus] = useState('Connecting to backend...');

  useEffect(() => {
    fetch('http://10.0.2.2:5000/api/test-db')
      .then((res) => res.json())
      .then((data) => {
        setStatus(`✅ ${data.message} (MySQL ${data.mysql_version})`);
      })
      .catch((err) => {
        setStatus(`❌ Connection failed: ${err.message}`);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>UniDeal</Text>
      <Text style={styles.status}>{status}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#8B1A1A', marginBottom: 12 },
  status: { fontSize: 16, textAlign: 'center' },
});