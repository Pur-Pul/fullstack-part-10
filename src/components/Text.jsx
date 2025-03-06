import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorInverted: {
    color: theme.colors.inverted
  },
  colorError: {
    color: theme.colors.error
  },
  bgColorPrimary: {
    backgroundColor: theme.colors.primary,
  },
  bgColorInverted: {
    backgroundColor: theme.colors.inverted
  },
  bgColorError: {
    backgroundColor: theme.colors.error
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  }
});

const Text = ({ color, bgColor, fontSize, fontWeight, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'inverted' && styles.colorInverted,
    color === 'error' && styles.colorError,
    bgColor === 'primary' && styles.bgColorPrimary,
    bgColor === 'inverted' && styles.bgColorInverted,
    bgColor === 'error' && styles.bgColorError,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontSize === 'heading' && styles.fontSizeHeading,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;