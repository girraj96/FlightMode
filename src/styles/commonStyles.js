import {StyleSheet} from 'react-native';
import colors from './colors';

export const hitSlopProp = {
  top: 12,
  right: 12,
  left: 12,
  bottom: 12,
};
export default StyleSheet.create({
  loader: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonTextWhite: {
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
});
