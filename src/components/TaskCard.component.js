import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

import Colors from '../constants/Colors.constant';
import Sizes from '../constants/Sizes.constant';

import TextStyles from '../styles/Text.style';
import LayoutStyles from '../styles/Layout.style';

const TaskCard = ({ task }) => {
  const { name, description } = task;
  return (
    <View style={[LayoutStyles.layoutShadow, styles.container]}>
      <Text style={[TextStyles.textMain, styles.title]}>{name}</Text>

      <Text numberOfLines={3} style={TextStyles.textSmall}>
        {description}
      </Text>
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: Sizes.mediumLarge,
    paddingHorizontal: Sizes.mediumLarge,
    paddingVertical: Sizes.mediumLarge,
    backgroundColor: Colors.secondary,
    marginBottom: Sizes.mediumLargeH,
  },
  title: {
    marginBottom: Sizes.mediumLargeH,
  },
});
