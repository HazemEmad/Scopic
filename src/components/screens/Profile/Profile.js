import * as React from 'react';
import {Alert, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import commonStyles from '../../common/common-styles';
import CustomText from '../../common/Text';
import colors from '../../../constant/colors';
import {perfectHeight} from '../../../utils/pixel-perfect';
import CustomButton from '../../common/Button';
import auth from '@react-native-firebase/auth';
import {LIST, USER} from '../../../constant/asyncStroage-keys';

const Profile = () => {
  const [email, setEmail] = React.useState();

  React.useEffect(() => {
    AsyncStorage.getItem(USER).then(value => {
      const {email} = JSON.parse(value);
      setEmail(email);
    });
  }, []);

  const logout = () => {
    auth()
      .signOut()
      .then(() => {
        AsyncStorage.removeItem(USER);
        AsyncStorage.removeItem(LIST);
      });
  };
  const showAlert = () => {
    Alert.alert(
      'Warning!',
      'Make sure if you are continue the list data that saved locally will lose',
      [{text: 'OK', onPress: () => logout()}, {text: 'CANCEL'}],
    );
  };

  if (!email) return null;

  return (
    <View style={{...commonStyles.container, justifyContent: 'space-between'}}>
      <CustomText
        color={colors.black}
        isBold
        isCenter
        hasVerticalMargin={perfectHeight(50)}>
        {email}
      </CustomText>
      <CustomButton buttonText={'Log Out'} onPress={showAlert} />
    </View>
  );
};
export default Profile;
