import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors.constant';
import Sizes from '../constants/Sizes.constant';

module.exports = StyleSheet.create({
  h1: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    fontSize: Sizes.huger,
    color: Colors.primary,
  },
  h2: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    fontSize: Sizes.huge,
    color: Colors.primary,
  },
  h3: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    fontSize: Sizes.larger,
    color: Colors.primary,
  },
  h4: {
    fontFamily: 'Poppins',
    fontWeight: '900',
    fontSize: Sizes.large,
    color: Colors.primary,
  },
  textMain: {
    fontFamily: 'Poppins',
    fontWeight: '700',
    fontSize: Sizes.mediumLarge,
    color: Colors.primary,
  },
  textSmall: {
    fontFamily: 'Poppins',
    fontSize: Sizes.mediumSmall,
    color: Colors.primary,
  },
  textBold: {
    fontWeight: '900',
  },
  textWhite: {
    color: Colors.white,
  },
});
