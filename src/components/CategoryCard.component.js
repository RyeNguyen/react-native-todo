import React from 'react';

import Sizes from '../constants/Sizes.constant';
import Colors from '../constants/Colors.constant';
import LayoutStyles from '../styles/Layout.style';
import TextStyle from '../styles/Text.style';

import { scaleSizeUI } from '../utils/scaleSizeUI.util';

import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

const CategoryCard = ({ cat }) => {
  return (
    <TouchableOpacity style={[styles.card, { backgroundColor: cat.color2 }]}>
      <Text style={[TextStyle.h4, TextStyle.textWhite, styles.title]}>
        {cat.name} Priority
      </Text>
      <Text style={[TextStyle.textSmall, TextStyle.textWhite]}>
        {cat.description}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: scaleSizeUI(152),
    paddingVertical: Sizes.mediumLargeH,
    paddingHorizontal: Sizes.large,
    marginLeft: Sizes.mediumLarge,
    borderTopLeftRadius: Sizes.mediumLarge,
    borderBottomRightRadius: Sizes.mediumLarge,
  },
  title: {
    marginBottom: Sizes.mediumLarge,
  },
});

export default CategoryCard;
