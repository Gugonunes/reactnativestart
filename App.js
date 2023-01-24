import React from 'react';
import { StyleSheet, View } from 'react-native';
import Title from './src/components/title/';
import Main from './src/components/Main';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <Main />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2A2A2A',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'auto',
    paddingTop: 50
  },
  title: {
    color: '#FFF',
    fontSize: 24,
    marginBottom: 24
  }
});
