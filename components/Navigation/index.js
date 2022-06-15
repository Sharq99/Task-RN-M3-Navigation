import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Product } from '../../products';
import { ProductDetails } from '../ProductDetail';
import { ProductsList } from '../ProductsList';
import { Cart } from '../Cart';
import { CartIcon } from '../CartIcon';

const { Navigator, Screen } = createNativeStackNavigator();

export default function RootNavigator() {
  return (
      <Navigator initialRouteName="Home" screenOptions={{
        headerStyle: {
          backgroundColor: '#EAD637',
        },
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
          <Screen name="Home" component={ProductsList} options={{headerShown: false}}/>
          <Screen name="Detail" component={ProductDetails} options={({ route }) => ({ title: route.params.title })}/>
          <Screen name="Cart" component={Cart} />
      </Navigator>
    
  );
}