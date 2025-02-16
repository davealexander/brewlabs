import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import TileButton from '../Components/tileButton';

export default function Add () {
  return (
    <SafeAreaView>
      <Text style={styles.addTitle}>Create New...</Text>
      <View style={styles.addView}> 
        <TileButton title='Brew' />
        <TileButton title='Journal Entry' />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  addTitle:{
    paddingLeft: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  addView:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 32,
    width: '100%',
    height: '100%',
    paddingLeft: 16,
  }
}); 