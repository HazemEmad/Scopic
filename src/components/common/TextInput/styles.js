import {StyleSheet} from 'react-native';
import colors from '../../../constant/colors';
import {perfectHeight} from '../../../utils/pixel-perfect';

export default StyleSheet.create({
  textInputContainer: {
    marginVertical: perfectHeight(15),
  },
  textInput: {flex: 1, color: colors.black},
});
