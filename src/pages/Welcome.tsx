import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Feather } from '@expo/vector-icons';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import WateringImg from '../assets/watering.png';

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification');
  }
  
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.title}>
          Gerencie {'\n'} suas plantas de {'\n'} forma fácil
        </Text>

        <Image
          source={WateringImg}
          style={styles.image}
          resizeMode= 'contain'
        />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
          
        >
          <Feather
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: 32,
    lineHeight: 38,
    textAlign: 'center',
    color: colors.heading
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  subtitle: {
    paddingHorizontal: 20,
    fontFamily: fonts.text,
    fontSize: 18,
    lineHeight: 25,
    textAlign: 'center',
    color: colors.body
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56
  },
  buttonIcon: {
    color: colors.white,
    fontSize: 32
  }
})