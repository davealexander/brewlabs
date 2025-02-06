import { View, Text, StyleSheet } from 'react-native';

export default function Journal() {
  return (
    <View style={styles.container}>
      <Text>Journal Screen hello world!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});