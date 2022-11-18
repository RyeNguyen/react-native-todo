import { StyleSheet, Text, View, TextInput } from 'react-native';
import React from 'react';

import Colors from '../constants/Colors.constant';
import Sizes from '../constants/Sizes.constant';

import TextStyles from '../styles/Text.style';

import LayoutStyles from '../styles/Layout.style';

const Input = ({
  preIcon,
  label,
  placeholder,
  isMultilines = false,
  numberOfLines = 1,
  value = '',
  handleChange,
  handleEnd,
}) => {
  return (
    <View style={styles.container}>
      {label && (
        <Text style={[TextStyles.textMain, styles.label]}>{label}</Text>
      )}

      <View style={[styles.inputContainer, LayoutStyles.layoutShadow]}>
        {preIcon}

        <TextInput
          autoCorrect={false}
          cursorColor={Colors.white}
          color={Colors.white}
          numberOfLines={numberOfLines}
          placeholder={placeholder}
          multiline={isMultilines}
          placeholderTextColor="rgba(255, 255, 255, 0.75)"
          defaultValue={value}
          onChangeText={handleChange}
          onEndEditing={handleEnd ? newText => handleEnd(newText) : null}
          style={{
            ...styles.input,
            textAlignVertical: isMultilines ? 'top' : 'auto',
            marginLeft: preIcon ? Sizes.smallest : 0,
          }}
        />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: Sizes.hugerH,
  },
  inputContainer: {
    paddingVertical: Sizes.smallerH,
    paddingHorizontal: Sizes.mediumLarge,
    backgroundColor: Colors.primary,
    borderTopLeftRadius: Sizes.mediumLarge,
    borderBottomRightRadius: Sizes.mediumLarge,
    marginTop: Sizes.smallerH,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginBottom: Sizes.smaller,
  },
  input: {
    flex: 1,
    fontWeight: '700',
  },
});
