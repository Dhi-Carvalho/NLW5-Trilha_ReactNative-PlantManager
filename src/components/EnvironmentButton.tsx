import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import {
  RectButton,
  RectButtonProps
} from 'react-native-gesture-handler';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface EnvironmentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnvironmentButton({
  title,
  active = false,
  ...rest
} : EnvironmentButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text
        style={[
          styles.text,
          active && styles.textActive
        ]}>
        {title}
      </Text>
    </RectButton>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 76,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5
  },
  containerActive: {
    backgroundColor: colors.green_light
  },
  text: {
    fontFamily: fonts.text,
    fontSize: 13,
    lineHeight: 23,
    textAlign: 'center',
    color: colors.heading
  },
  textActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark
  }
})