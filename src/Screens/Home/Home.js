import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import WrapperContainer from '../../Components/WrapperContainer';
import ButtonComponent from '../../Components/ButtonComponent';
import navigationStrings from '../../constants/navigationStrings';

export default function Home({route, navigation}) {
  return (
    <WrapperContainer>
      <Text>Home</Text>
      <ButtonComponent
        btnText={'Click me'}
        onPress={() => navigation.navigate(navigationStrings.PROFILE)}
      />
    </WrapperContainer>
  );
}

const styles = StyleSheet.create({});
