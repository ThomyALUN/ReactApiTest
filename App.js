import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

import Menu from './components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Menu />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
