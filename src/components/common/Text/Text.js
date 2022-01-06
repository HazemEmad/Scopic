import * as React from 'react';
import {Text} from 'react-native';
import {
  perfectHeight,
  perfectSize,
  perfectWidth,
} from '../../../utils/pixel-perfect';

const CustomText = ({
  children,
  isBold,
  isHeadingTitle,
  isCenter,
  hasVerticalMargin,
  hasHorizontalMargin,
  color,
  style,
  fontSize = perfectSize(16),
  ...rest
}) => {
  let marginVertical = 0;
  let marginHorizontal = 0;
  let textAlign = 'left';

  if (isHeadingTitle) {
    fontSize = perfectSize(24);
  }

  if (isCenter) {
    textAlign = 'center';
  }

  if (hasVerticalMargin) {
    marginVertical =
      typeof hasVerticalMargin === 'boolean'
        ? perfectHeight(10)
        : hasVerticalMargin;
  }
  if (hasHorizontalMargin) {
    marginHorizontal =
      typeof hasHorizontalMargin === 'boolean'
        ? perfectWidth(5)
        : hasHorizontalMargin;
  }

  const fontWeight = isBold ? 'bold' : 'normal';

  return (
    <Text
      {...rest}
      style={[
        {
          color,
          fontWeight,
          fontSize,
          textAlign,
          marginVertical,
          marginHorizontal,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};
export default CustomText;
