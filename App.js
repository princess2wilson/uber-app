import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux"
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MapScreen from './screens/MapScreen';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


// 1) set up redux


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <Provider store ={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
          <Stack.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{headerShown:false,}}
          />
            <Stack.Screen
            name='MapScreen'
            component={MapScreen} 
            options={{headerShown:true,}}
          />
          </Stack.Navigator>
        </SafeAreaProvider>
    </NavigationContainer>
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
