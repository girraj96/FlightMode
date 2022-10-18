import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import commonStyles from '../styles/commonStyles';
import {
  moderateScale,
  moderateVerticalScale,
  width,
} from '../styles/responsiveSize';

const ButtonComponent = ({
  containerStyle,
  icon,
  onPress,
  btnText,
  btnStyle,
  borderRadius,
  marginTop = 0,
  marginBottom = 0,
  textStyle = {},
  iconStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...containerStyle,
      }}
      onPress={onPress}>
      <View
        style={{
          ...styles.btnMainViewStyle,
          borderRadius,
          ...btnStyle,
        }}>
        <Text style={{...commonStyles.buttonTextWhite, ...textStyle}}>
          {btnText}
        </Text>
        {icon && <Image style={{...iconStyle}} source={icon} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: moderateVerticalScale(40),
    backgroundColor: 'green',
    marginHorizontal: moderateScale(20),
    borderRadius: moderateScale(12),
    marginTop: moderateVerticalScale(5),
  },
  btnMainViewStyle: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: moderateScale(10),
  },
});

export default ButtonComponent;
