import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Test = () => {
  return (
    <View styles={Styles.Container}>
      <Text>Halo bucin</Text>
    </View>
  );
};

export default Test;

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
