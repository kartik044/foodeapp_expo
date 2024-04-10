import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './screen/Homescreen';
import Restaurantscreen from './screen/Restaurantscreen';
import Cartscreen from './screen/Cartscreen';
const Stack = createNativeStackNavigator()

const navigation = () => {
  return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName='Home ' screenOptions={{headerShown:false}}>
        <Stack.Screen  name="Home" component={Homescreen} />
        <Stack.Screen name="Restaurant" component={Restaurantscreen} />
        <Stack.Screen name="Cartscreen" options={{presentation:'modal'}} component={Cartscreen} />
        </Stack.Navigator>
        </NavigationContainer>
  )
}

export default navigation

