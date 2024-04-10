import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from "./Navigation"
import { Provider } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import store from "./utils/store"
export default function App() {
  return (
  <Provider store={store}>
    <Navigation/>
    </Provider>
  );
}


