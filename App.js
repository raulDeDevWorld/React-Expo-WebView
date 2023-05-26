import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';


export default function App() {
  return (

    <View
      style={{
        flex: 1,
        backgroundColor: '#1D0F4A',
      }}>
      <WebView
        style={styles.container}
        source={{ uri: 'https://precio-justo-v2.vercel.app/' }}
      />
      <StatusBar style="light" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
