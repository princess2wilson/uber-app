import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux"
import { store } from './store';

// 1) set up redux


export default function App() {
  return (
    <Provider store ={store}>
    <View style={styles.container}>
      <Text>lets do this </Text>
    </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
