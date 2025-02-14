import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import BrewCard from '../Components/brewCard';

export default function Brew() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.brewTitle}>Brews</Text>
      <ScrollView>
          <BrewCard />
          <BrewCard />
          <BrewCard />
          <BrewCard />
          <BrewCard />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  brewTitle: {
    paddingLeft: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
});