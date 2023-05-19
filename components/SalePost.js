import React from 'react';
import {SafeAreaView, View, Text, Image, StyleSheet} from 'react-native';

export default function SalePost() {
  return (
    <SafeAreaView style={styles.postContainer}>
      <Image source={require('../icons/arrow.png')} style={styles.arrow} />
      <View style={styles.innerContainer}>
        <View style={styles.iconsContainer}>
          <Image
            source={require('../icons/clothing.png')}
            style={styles.icon}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>KENT AND DRIGSS AVE.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  arrow: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    margin: 10,
  },
  innerContainer: {
    borderStyle: 'dashed',
    borderColor: 'red',
    borderWidth: 1.5,
    height: 100,
    width: 300,
    margin: 10,
  },
  textContainer: {
    padding: 5,
    alignItems: 'flex-start',
    margin: 5,
  },
  text: {
    fontSize: 20,
  },
  iconsContainer: {
    justifyContent: 'flex-end',
    margin: 5,
    flexDirection: 'row',
  },
  icon: {
    height: 25,
    width: 25,
  },
});
