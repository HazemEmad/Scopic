import * as React from 'react';
import {ActivityIndicator, TouchableOpacity} from 'react-native';
import colors from '../../../constant/colors';
import CustomText from '../Text';
import styles from './styles';

const CustomButton = ({
  buttonText,
  buttonStyles,
  disabled,
  loading,
  ...rest
}) => {
  return (
    <TouchableOpacity
      {...rest}
      disabled={disabled}
      style={[
        {
          ...styles.buttonContainer,
          ...buttonStyles,
        },
        disabled && {...styles.disabled},
      ]}>
      {loading ? (
        <ActivityIndicator
          style={{alignSelf: 'center'}}
          color={colors.background}
        />
      ) : (
        <CustomText isBold isCenter color={colors.background}>
          {buttonText}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};
export default CustomButton;
