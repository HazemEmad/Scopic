import {StyleSheet} from 'react-native';
import colors from '../../../constant/colors';
import {perfectSize} from '../../../utils/pixel-perfect';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: perfectSize(25),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewHasBottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
});
