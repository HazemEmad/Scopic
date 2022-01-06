import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Register from '../../screens/Register';
import Login from '../../screens/Login';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default AuthStack;
