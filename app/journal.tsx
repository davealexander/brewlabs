import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TileButton from '../Components/tileButton';

export default function Journal() {
  return (
    <SafeAreaView>
      <Text style={styles.journalTitle}>Journals</Text>
      <View style={styles.journalView}>
        <TileButton title='Notes' />
        <TileButton title='Recipes' />
        <TileButton title='Ingredients' />
        <TileButton title='Tasting Ideas' />
        <TileButton title='Breweries' />
        <TileButton title='Brewing' />
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
  journalView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 32,
    width: '100%',
    height: '100%',
    paddingLeft: 16,
  },
});