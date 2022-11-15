import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

import Colors from '../constants/Colors.constant';
import Sizes from '../constants/Sizes.constant';

import TextStyles from '../styles/Text.style';

import LayoutStyles from '../styles/Layout.style';

const Input = ({ label, placeholder, isMultilines = false }) => {
  return (
    <View style={styles.container}>
      {label && <Text style={[TextStyles.textMain, styles.label]}>{label}</Text>}

      <View style={styles.inputContainer}>
        <TextInput 
          autoCorrect={false}
          cursorColor={Colors.white}
          color={Colors.white}
          placeholder={placeholder}
          multiline={isMultilines}
          placeholderTextColor='rgba(255, 255, 255, 0.75)'
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: Sizes.massiveH
  },
  inputContainer: {
    paddingVertical: Sizes.smallerH,
    paddingHorizontal: Sizes.mediumLarge,
    backgroundColor: Colors.primaryLighter,
    borderTopLeftRadius: Sizes.mediumLarge,
    borderBottomRightRadius: Sizes.mediumLarge,
    marginTop: Sizes.smallerH
  },
  label: {
    marginBottom: Sizes.smaller
  },
  input: {
    fontWeight: '700'
  }
});
