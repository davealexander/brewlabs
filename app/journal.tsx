import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import JournalTile from '../Components/journalTile';

export default function Journal() {
  return (
    <SafeAreaView>
      <Text style={styles.journalTitle}>Journals</Text>
      <View style={styles.journalScrollView}>
        <JournalTile title='Notes' />
        <JournalTile title='Recipes' />
        <JournalTile title='Ingredients' />
        <JournalTile title='Tasting Ideas' />
        <JournalTile title='Breweries' />
        <JournalTile title='Brewing' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  journalTitle: {
    paddingLeft: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  journalScrollView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 32,
    width: '100%',
    height: '100%',
    paddingLeft: 16,
  },
});