import {StyleSheet} from 'react-native';
import colors from '../../../constant/colors';
import {perfectHeight, perfectSize} from '../../../utils/pixel-perfect';

export default StyleSheet.create({
  addBtn: {
    backgroundColor: colors.addButton,
    height: perfectSize(50),
    width: perfectSize(50),
    borderRadius: perfectSize(50) / 2,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: perfectHeight(100),
    right: perfectSize(25),
    elevation: 20,
    zIndex: 3,
  },
  list: {marginTop: perfectHeight(50)},
});
