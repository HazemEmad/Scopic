import {StyleSheet} from 'react-native';
import colors from '../../../constant/colors';
import {
  perfectWidth,
  percentageWidth,
  perfectSize,
} from '../../../utils/pixel-perfect';

export default StyleSheet.create({
  headerContainer: {
    backgroundColor: colors.background,
    padding: perfectSize(25),
  },
  title: {position: 'absolute', right: percentageWidth(0.45)},
  subTitle: {position: 'absolute', right: perfectWidth(25)},
});
