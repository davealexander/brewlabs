import { useState } from 'react';
import { Text, ScrollView, View, Image, TextInput, TouchableOpacity, StyleSheet, Pressable } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {

  const [text, setText] = useState('');

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    button: {
      backgroundColor: '#6200ee',
      paddingVertical: 12,
      paddingHorizontal: 24,
      borderRadius: 8,
      elevation: 3,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold'
    },
    safeArea: {
      flex: 1,
    },
    title: {
      fontSize: 24,
      fontFamily: 'lucida-console',
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center',
    },
    carousel: {
      flexDirection: 'row',
      marginTop: 16,
    },
    carouselItem: {
      width: 150, 
      height: 150,
      marginRight: 16, 
      backgroundColor: 'transparent'
    },
    brewAlertTitle: {
      fontSize: 24,
      fontFamily: 'lucida-console',
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'left',
    },
    currentBrewsTitle: {
      margin: 8,
      fontSize: 24,
      fontFamily: 'lucida-console',
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'left',
    },
    pressable: {
      margin: 8,
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      padding: 8,
      borderRadius: 8,    
    },
    pressable1: {
      margin: 8,
      backgroundColor: 'rgba(255, 255, 0, 0.5)',
      padding: 8,
      borderRadius: 8,    
    }
    
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text style={styles.title}>What's Brewing?</Text>
      </View>
      <View>
        <Text style={styles.currentBrewsTitle}>Recent Journal Entries</Text>
      </View>
      <ScrollView horizontal={true}>
       <Image
          style={styles.carouselItem}
          source={require('../assets/images/journal.png')}
        />
      <Image
          style={styles.carouselItem}
          source={require('../assets/images/bottles.png')}
        />
      </ScrollView>
      <Text style={styles.currentBrewsTitle}>Current Brews</Text>
      <ScrollView style={styles.carousel} horizontal={true}>
      <Image
          style={styles.carouselItem}
          source={require('../assets/images/react-logo.png')}
        />
      <Image
      style={styles.carouselItem}
          source={require('../assets/images/brews.png')}
        />
      <Image
      style={styles.carouselItem} 
          source={require('../assets/images/brews.png')} 
        />
      </ScrollView>
      <Text style={{color: 'red', fontSize: 20, fontWeight: 'bold'}}>{text}</Text>
      <View>
        <Text style={styles.brewAlertTitle}>Brew Alerts</Text>
      </View>
      <ScrollView>
        <Pressable style={styles.pressable} onPress={() => alert('Beer 1 needs more yeast')}>
          <Text>Beer 1 needs more yeast</Text>
        </Pressable>
        <Pressable style={styles.pressable1}>
          <Text>Mead 2 needs more honey</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}
