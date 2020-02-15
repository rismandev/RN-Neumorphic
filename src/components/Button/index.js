/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet} from 'react-native';
import Color from 'color';
import colors from '../../styles/colors';

const AtomButton = props => {
  return (
    <View style={styles.ButtonOutline}>
      <View
        style={[
          styles.ButtonInline,
          {width: props.width ? props.width : 65},
          props.left ? styles.Left : styles.Center,
        ]}>
        {props.children}
      </View>
    </View>
  );
};

export default AtomButton;

const styles = StyleSheet.create({
  ButtonOutline: {
    borderRadius: 15,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowColor: Color(colors.WHITE)
      .darken(0.15)
      .alpha(0.5),
    margin: 10,
    elevation: 5,
  },
  ButtonInline: {
    backgroundColor: colors.WHITE,
    height: 65,
    borderRadius: 15,
    shadowOffset: {
      width: -5,
      height: -5,
    },
    shadowOpacity: 1.0,
    shadowRadius: 5,
    shadowColor: Color(colors.WHITE)
      .darken(0.15)
      .alpha(0.2),
    elevation: 2,
  },
  Left: {
    justifyContent: 'center',
    paddingLeft: 28,
  },
  Center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
