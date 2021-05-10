import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug',
  nextScreen: string;
}

const emojis = {
  hug: '🤗',
  smile: '😊'
}

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = routes.params as Params;

  function handleMoveOn(){
    navigation.navigate(nextScreen);
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.emoji}>
          {emojis[icon]}
        </Text>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>

        <View style={styles.footer}>
          <Button
            title={buttonTitle}
            onPress={handleMoveOn}
          />
        </View>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emoji: {
    fontSize: 96
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 24,
    lineHeight: 30,
    color: colors.heading,
    textAlign: 'center',
    marginTop: 64
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 25,
    color: colors.body,
    textAlign: 'center',
    paddingVertical: 16,
    paddingHorizontal: 20
  },
  footer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20
  }
})