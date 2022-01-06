import * as React from 'react';
import {Animated, StyleSheet} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';
import colors from '../../../../constant/colors';
import CustomText from '../../../common/Text';
import styles from './styles';

export default SwipeItem = ({value, remove}) => {
  const height = new Animated.Value(70);
  const animatedDelete = () => {
    Animated.timing(height, {
      toValue: 0,
      duration: 350,
      useNativeDriver: true,
    }).start(() => {
      remove();
    });
  };

  const swipeRight = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [-200, 0],
      outputRange: [1, 0.5],
      extrapolate: 'clamp',
    });
    return (
      <Animated.View style={styles.deleteContainer}>
        <Animated.Text style={{...styles.deleteText, transform: [{scale}]}}>
          Delete Item
        </Animated.Text>
      </Animated.View>
    );
  };

  return (
    <Swipeable
      renderRightActions={swipeRight}
      rightThreshold={-200}
      onSwipeableOpen={animatedDelete}>
      <Animated.View style={styles.wrapper}>
        <CustomText isBold color={colors.black} hasVerticalMargin>
          {value}
        </CustomText>
      </Animated.View>
    </Swipeable>
  );
};
