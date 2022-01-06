import {StyleSheet} from 'react-native';
import colors from '../../../../constant/colors';
import {
  perfectHeight,
  perfectSize,
  perfectWidth,
} from '../../../../utils/pixel-perfect';

export default StyleSheet.create({
  deleteContainer: {
    backgroundColor: 'red',
    width: '100%',
    justifyContent: 'center',
  },
  deleteText: {
    marginLeft: 'auto',
    marginRight: perfectWidth(50),
    fontSize: perfectSize(15),
    fontWeight: 'bold',
    color: colors.background,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.background,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
});
