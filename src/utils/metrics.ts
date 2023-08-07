import { Platform, Dimensions } from 'react-native';

const platform = Platform.OS;
const { width, height } = Dimensions.get('window');
export const DEVICE_WIDTH = width;
export const DEVICE_HEIGHT = height;

export const IS_IOS = platform === 'ios';
export const IS_ANDROID = platform === 'android';
