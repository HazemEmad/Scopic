import {StyleSheet} from 'react-native';
import colors from '../../../constant/colors';
import {perfectHeight, perfectSize} from '../../../utils/pixel-perfect';

export default StyleSheet.create({
  buttonContainer: {
    paddingVertical: perfectHeight(14),
    borderRadius: perfectSize(5),
    marginVertical: perfectHeight(10),
    backgroundColor: colors.primary,
    elevation: 2,
  },
  disabled: {
    opacity: 0.5,
  },
});
