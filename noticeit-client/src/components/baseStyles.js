import { StyleSheet, Dimensions } from 'react-native';

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width
};

export const colors = {
  primary: '#1e1e1e',
  background: '#e1e1e1'
};

export const padding = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const margin = {
  xs: 5,
  sm: 10,
  md: 20,
  lg: 30,
  xl: 40
};

export const fonts = {
  sm: 14,
  md: 18,
  lg: 22,
  xl: 28,
  xxl: 36,
  primary: 'pt-serif-web-regular', //serif
  secondary: 'pt-sans-web-regular', //sans serif  
};

const baseStyles = {
  container: {
    backgroundColor: colors.background,
    paddingHorizontal: padding.sm,
    paddingVertical: padding.lg,
    width: dimensions.fullWidth
  },
  boxShadow: {
    elevation: 4
  },
  header: {
    backgroundColor: 'transparent',
    fontFamily: fonts.bold,
    fontSize: fonts.xl,
    textAlign: 'center'
  },
  image: {
    alignSelf: 'stretch',
    flex: 1,
    height: undefined,
    width: undefined
  },
  textPrimary: {
    color: colors.primary,
    fontFamily: fonts.primary
  },
  textSecondary: {
    color: colors.primary,
    fontFamily: fonts.secondary
  }
};

export default function createStyles(overrides = {}) {
  return StyleSheet.create({ ...baseStyles, ...overrides });
}
