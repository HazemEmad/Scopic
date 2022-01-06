import * as React from 'react';
import {ScrollView, View} from 'react-native';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import colors from '../../../constant/colors';
import {percentageHight} from '../../../utils/pixel-perfect';
import CustomButton from '../../common/Button';
import commonStyles from '../../common/common-styles';
import CustomText from '../../common/Text';
import CustomTextInput from '../../common/TextInput';
import styles from './styles';
import {USER, WELCOME_SCREEN} from '../../../constant/asyncStroage-keys';

const Register = ({navigation}) => {
  const [username, setUserName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const valid = username != '' && password != '';

  const register = () => {
    setError('');
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(username, password)
      .then(response => {
        AsyncStorage.setItem(WELCOME_SCREEN, 'true');
        AsyncStorage.setItem(USER, JSON.stringify(response.user));
      })
      .catch(error => {
        console.log(error);
        error = error.code?.split('/')[1].split('-').join(' ');
        setError(error);
      })
      .finally(() => setLoading(false));
  };
  const navigateToLogin = () => navigation.navigate('Login');
  return (
    <View style={commonStyles.container}>
      <ScrollView>
        <CustomText
          color={colors.black}
          isBold
          isHeadingTitle
          hasVerticalMargin>
          Sign Up
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
          buttonText={'Sign Up'}
          onPress={register}
          buttonStyles={{marginTop: percentageHight(0.12)}}
          disabled={loading || !valid}
          loading={loading}
        />
        <View
          style={{
            ...commonStyles.row,
            ...styles.signIn,
          }}>
          <CustomText color={colors.secondary} isBold hasHorizontalMargin>
            Have an Account?
          </CustomText>
          <CustomText color={colors.primary} isBold onPress={navigateToLogin}>
            Sign In
          </CustomText>
        </View>
      </ScrollView>
    </View>
  );
};
export default Register;
