import React from 'react';

import Sizes from '../constants/Sizes.constant';
import Colors from '../constants/Colors.constant';
import LayoutStyles from '../styles/Layout.style';
import TextStyle from '../styles/Text.style';

import { scaleSizeUI } from '../utils/scaleSizeUI.util';

import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const CategoryCard = ({ cat }) => {
  return (
    <TouchableOpacity>
      <ImageBackground
        source={require('../../assets/images/img-background-red.jpg')}
        style={styles.card}
        imageStyle={{
          borderTopLeftRadius: Sizes.mediumLarge,
          borderBottomRightRadius: Sizes.mediumLarge,
        }}>
        <View style={[styles.cardInner, { backgroundColor: cat.color2 }]}>
          <Text style={[TextStyle.h4, TextStyle.textWhite, styles.title]}>
            {cat.name} Priority
          </Text>
          <Text style={[TextStyle.textSmall, TextStyle.textWhite]}>
            {cat.description}
          </Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: scaleSizeUI(152),
    height: scaleSizeUI(190, true),
    marginLeft: Sizes.mediumLarge,
  },
  cardInner: {
    width: '100%',
    height: '100%',
    paddingVertical: Sizes.mediumLargeH,
    paddingHorizontal: Sizes.large,
    borderTopLeftRadius: Sizes.mediumLarge,
    borderBottomRightRadius: Sizes.mediumLarge,
  },
  title: {
    marginBottom: Sizes.mediumLarge,
  },
});

export default CategoryCard;
