import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import LayoutStyles from "../styles/Layout.style";
import TextStyles from "../styles/Text.style";

import Colors from '../constants/Colors.constant';
import Sizes from "../constants/Sizes.constant";

const HomeHeader = ({ data }) => {
  return (
    <View style={[LayoutStyles.layoutStretch, styles.headerTop]}>
      <View>
        <Text style={[TextStyles.h2, TextStyles.textWhite]}>
          Welcome {data.firstName}
        </Text>
        <Text
          style={[
            TextStyles.textMain,
            TextStyles.textWhite,
            styles.welcome,
          ]}>
          Have a great day!
        </Text>
      </View>

      <Image source={{ uri: data.avatar }} style={styles.avatar} />
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    marginTop: Sizes.smallestH,
  },
  headerTop: {
    marginTop: Sizes.hugerH,
    marginBottom: Sizes.mediumLargeH,
  },
  avatar: {
    width: Sizes.massive,
    height: Sizes.massive,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: Colors.secondary,
    backgroundColor: 'teal'
  },
});

export default HomeHeader;
