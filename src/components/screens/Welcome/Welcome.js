import * as React from 'react';
import {View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import commonStyles from '../../common/common-styles';
import CustomText from '../../common/Text';
import colors from '../../../constant/colors';
import {perfectSize} from '../../../utils/pixel-perfect';
import CustomButton from '../../common/Button';
import {WELCOME_SCREEN} from '../../../constant/asyncStroage-keys';

const Welcome = ({navigation}) => {
  const gotoList = () => {
    AsyncStorage.setItem(WELCOME_SCREEN, 'false');
    navigation.navigate('List');
  };
  return (
    <View style={{...commonStyles.container, justifyContent: 'space-between'}}>
      <CustomText
        color={colors.black}
        isBold
        isHeadingTitle
        isCenter
        hasVerticalMargin>
        Welcome
      </CustomText>
      <CustomText
        color={colors.secondary}
        isBold
        isCenter
        hasVerticalMargin
        fontSize={perfectSize(20)}>
        Hi there! Nice to meet you.
      </CustomText>
      <CustomButton buttonText={'List'} onPress={gotoList} />
    </View>
  );
};
export default Welcome;
