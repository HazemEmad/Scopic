import * as React from 'react';
import {View, TouchableOpacity} from 'react-native';
import colors from '../../../constant/colors';
import {perfectSize} from '../../../utils/pixel-perfect';
import CustomText from '../Text';
import commonStyles from '../common-styles';
import styles from './styles';

const Header = props => {
  function getTitle() {
    if (props?.options?.title) {
      return props.options.title;
    }
  }
  const hasBackIcon = props?.back;
  const {navigation} = props;
  const title = getTitle();
  const goBack = () => navigation.pop();
  const navigateToProfile = () => navigation.navigate('Profile');
  const rightButton = title == 'List' ? 'Profile' : '';
  
  return (
    <View
      style={{
        ...commonStyles.row,
        ...styles.headerContainer,
      }}>
      {hasBackIcon && (
        <TouchableOpacity onPress={goBack}>
          <CustomText isBold color={colors.primary} fontSize={perfectSize(18)}>
            Back
          </CustomText>
        </TouchableOpacity>
      )}
      <CustomText
        color={colors.black}
        isBold
        isCenter
        fontSize={perfectSize(18)}
        style={styles.title}>
        {title}
      </CustomText>
      <TouchableOpacity onPress={navigateToProfile} style={styles.subTitle}>
        <CustomText isBold color={colors.primary} fontSize={perfectSize(18)}>
          {rightButton}
        </CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
