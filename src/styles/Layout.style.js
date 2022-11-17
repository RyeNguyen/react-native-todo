import { StyleSheet, Dimensions } from 'react-native';

import Colors from '../constants/Colors.constant';
import Sizes from '../constants/Sizes.constant';

module.exports = StyleSheet.create({
  layoutCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  layoutStretch: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  layoutScreen: {
    backgroundColor: Colors.primary,
    overflow: 'visible',
  },
  layoutShadow: {
    shadowColor: '#000000',
    shadowOpacity: 0,
    shadowRadius: 50,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: Sizes.large,
  },
});
