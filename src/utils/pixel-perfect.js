import {Dimensions} from 'react-native';
import {create} from 'react-native-pixel-perfect';

const designResolution = {
  width: 360,
  height: 720,
};
let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

export function perfectWidth(pixel) {
  return screenWidth / (designResolution.width / pixel);
}

export function perfectHeight(pixel) {
  return screenHeight / (designResolution.height / pixel);
}
export function percentageWidth(percentage, width) {
  percentage = (width ?? designResolution.width) * percentage;
  return perfectWidth(percentage);
}
export function percentageHight(percentage, height) {
  percentage = (height ?? designResolution.height) * percentage;
  return perfectHeight(percentage);
}

export const perfectSize = create(designResolution);
