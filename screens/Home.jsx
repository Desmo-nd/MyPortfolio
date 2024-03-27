import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SIZES } from '../constants';
import Image from '../components/Home/Image';
const Home = () => {
  return (
    <View style={styles.heroSlider}>
      <View style={styles.slide}>
      </View>
      <View style={styles.leftslide}>
        <Image />
        <View style={styles.content}>
            <Text style={styles.title}>After decades of research, the scientific evidence is clear.</Text>
            <Text style={styles.subhead}>Being grateful is good for you and your loved ones.</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Play Video</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroSlider: {
    backgroundColor: '#73BE64',
    color: '#ffffff',
    fontFamily: 'Helvetica Neueu, Helvetica, sans-serif',
    width: SIZES.width,
    height: 700,
    alignSelf: 'center',
    flexDirection: 'row',
    
  },
  leftslide:{
    justifyContent: 'center',
    
  },
  slide: {
    backgroundColor: '#35424E',
    flexDirection: 'column',
    justifyContent: 'center',
    width: "25%",
    height: '100%',
    clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)',
  },
  content: {
    padding: 0,
    paddingHorizontal: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  subhead: {
    fontSize: 16,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#EF5A56',
    color: '#ffffff',
    textAlign: 'center',
    textDecorationLine: 'none',
    textTransform: 'uppercase',
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 200,
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
  },
});

export default Home;
