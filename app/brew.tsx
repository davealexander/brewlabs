import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Brew() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.brewTitle}>Brews</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  brewTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  }

});