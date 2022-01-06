import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

import AuthStack from './AuthStack';
import AppStack from './AppStack';
import Hoc from '../common/Hoc';
import {WELCOME_SCREEN} from '../../constant/asyncStroage-keys';

const RootNavigator = () => {
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();
  const Stack = Hoc(!user ? AuthStack : AppStack);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }
  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};
export default RootNavigator;
