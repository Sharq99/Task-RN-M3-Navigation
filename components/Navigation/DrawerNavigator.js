import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useDrawerStatus } from '@react-navigation/drawer';
import {Cart} from '../Cart';
import RootNavigator from './index';
import ProductsList from '../ProductsList';
import { CartIcon } from '../CartIcon';

const Drawer = createDrawerNavigator();
// const isDrawerOpen = useDrawerStatus() === 'open';

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Products"
        component={RootNavigator}
        options={{ drawerLabel: 'Products' }}
      />
      <Drawer.Screen
        name="Cart"
        component={Cart}
        options={{ drawerLabel: 'Cart' }}
      />
    </Drawer.Navigator>
  )
}
