/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import ButtonNeumorphism from '../components/Button';
import colors from '../styles/colors';

const Main = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: colors.WHITE}}>
      <View style={styles.Container}>
        <View style={styles.Header}>
          <Text style={styles.TextHeader}>0000</Text>
        </View>

        <View style={{justifyContent: 'flex-end', paddingBottom: 50}}>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <ButtonNeumorphism>
              <Text style={styles.Text}>AC</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>+/-</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>%</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>/</Text>
            </ButtonNeumorphism>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <ButtonNeumorphism>
              <Text style={styles.Text}>7</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>8</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>9</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>x</Text>
            </ButtonNeumorphism>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <ButtonNeumorphism>
              <Text style={styles.Text}>4</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>5</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>6</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>-</Text>
            </ButtonNeumorphism>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <ButtonNeumorphism>
              <Text style={styles.Text}>1</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>2</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>3</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>+</Text>
            </ButtonNeumorphism>
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <ButtonNeumorphism width={150} left>
              <Text style={styles.Text}>0</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>.</Text>
            </ButtonNeumorphism>
            <ButtonNeumorphism>
              <Text style={styles.Text}>=</Text>
            </ButtonNeumorphism>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    padding: 20,
  },
  Header: {
    flex: 1,
    backgroundColor: colors.WHITE,
    marginBottom: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    padding: 15,
  },
  TextHeader: {color: colors.BLACK, fontSize: 45},
  Text: {
    fontSize: 16,
    color: colors.BLACK,
  },
});
