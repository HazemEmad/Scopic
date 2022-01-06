import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Lists from '../../screens/Lists';
import Welcome from '../../screens/Welcome';
import Profile from '../../screens/Profile';
import Header from '../../common/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {WELCOME_SCREEN} from '../../../constant/asyncStroage-keys';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  const [welcomeScreen, setWelcomeScreen] = React.useState();
  const mountRef = React.useRef(false);

  React.useEffect(() => {
    mountRef.current = true;
    if (mountRef.current) {
      AsyncStorage.getItem(WELCOME_SCREEN).then(value => {
        value = value == 'true';
        mountRef.current && setWelcomeScreen(value);
      });
    }
    return () => {
      mountRef.current = false;
    };
  }, []);

  const routeName = welcomeScreen ? 'Welcome' : 'List';
  if (welcomeScreen == undefined) return null;

  return (
    <Stack.Navigator initialRouteName={routeName}>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="List"
        component={Lists}
        options={{header: props => <Header {...props} />, title: 'List'}}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{header: props => <Header {...props} />, title: 'Profile'}}
      />
    </Stack.Navigator>
  );
};
export default AppStack;
