import * as React from 'react';
import {ScrollView, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import commonStyles from '../../common/common-styles';
import CustomText from '../../common/Text';
import colors from '../../../constant/colors';
import {perfectHeight} from '../../../utils/pixel-perfect';
import CustomTextInput from '../../common/TextInput';
import CustomButton from '../../common/Button';
import styles from './styles';
import KeyboardHooks from '../../../utils/KeyboardHooks';
import {USER, WELCOME_SCREEN} from '../../../constant/asyncStroage-keys';

const Login = ({navigation}) => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const valid = username != '' && password != '';
  const [keyboardStatus] = KeyboardHooks();
  const navigateToRegister = () => navigation.navigate('Register');

  const login = () => {
    setError('');
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(username, password)
      .then(response => {
        AsyncStorage.setItem(WELCOME_SCREEN, 'false');
        AsyncStorage.setItem(USER, JSON.stringify(response.user));
      })
      .catch(error => {
        error = error.code.split('/')[1].split('-').join(' ');
        setError(error);
      })
      .finally(() => setLoading(false));
  };

  return (
    <View style={commonStyles.container}>
      <ScrollView>
        <CustomText
          color={colors.secondary}
          isBold
          isHeadingTitle
          isCenter
          hasVerticalMargin={perfectHeight(50)}>
          Scopic
        </CustomText>
        <CustomText color={colors.black} isBold isHeadingTitle>
          Sign In
        </CustomText>
        <CustomTextInput
          title={'Email'}
          placeholder="Your email address"
          setText={text => setUserName(text)}
        />
        <CustomTextInput
          title={'Password'}
          placeholder="Your password"
          setText={text => setPassword(text)}
          secured={true}
        />
        <CustomText isBold isCenter color={'red'}>
          {error}
        </CustomText>
        <CustomButton
          buttonText={'Sign In'}
          onPress={login}
          loading={loading}
          disabled={!valid || loading}
        />
      </ScrollView>

      {!keyboardStatus && (
        <CustomText
          color={colors.primary}
          isBold
          style={styles.signUp}
          onPress={navigateToRegister}>
          Sign Up
        </CustomText>
      )}
    </View>
  );
};
export default Login;
