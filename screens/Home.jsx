import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SIZES } from '../constants';
import Image from '../components/Home/Image';
import Content from '../components/Home/Content';
// import RightTabNavigation from '../navigation/RightTabNavigation';

const Home = () => {
  return (
    <View style={styles.heroSlider}>
      <View style={styles.slide}>
      </View>
      <View style={styles.leftslide}>
        <Image />
        <View style={styles.contentcont}>
            <Content />
        </View>
        {/* <RightTabNavigation /> */}
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

  slide: {
    backgroundColor: '#35424E',
    flexDirection: 'column',
    justifyContent: 'center',
    width: "25%",
    height: '100%',
    clipPath: 'polygon(0 0, 100% 0, 70% 100%, 0 100%)',
  },
  leftslide:{
    justifyContent: 'center',
    
  },
  contentcont:{
    padding: 0,
    left: 150,
    height:"90%",
    height: "100%",
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Home;
