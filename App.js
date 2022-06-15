import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './components/Navigation/index';
import DrawerNavigator from './components/Navigation/DrawerNavigator';

export default function App() {
  return(
    <NavigationContainer>
      <DrawerNavigator/>
      {/* <RootNavigator/> */}
    </NavigationContainer>
  )
}
