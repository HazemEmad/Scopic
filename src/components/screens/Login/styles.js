import {StyleSheet} from 'react-native';
import {perfectHeight, perfectWidth} from '../../../utils/pixel-perfect';

export default StyleSheet.create({
  signUp: {
    position: 'absolute',
    bottom: perfectHeight(40),
    right: perfectWidth(25),
  },
});
