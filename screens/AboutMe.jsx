import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomNavigationBar from '../components/CustomNavigationBar';
import PersonalInfo from '../components/About/PersonalInfo';
import Grid from '../components/About/Grid';
import { SIZES, COLORS } from '../constants';


const AboutMe = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.modalHeader}>ABOUT<Text style={{color:COLORS.primary}}>ME</Text></Text>
      <CustomNavigationBar />
      <View style={styles.gridCont}>
        <PersonalInfo/>
        <Grid/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#35424E',
    width: SIZES.width,
    // justifyContent: 'center',
    // alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textAlign: 'center',
  },
  gridCont:{
    width: "95%",
    
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop: 20,
  },
  modalHeader: {
    fontSize: 24,
    marginBottom: 20,
    color: '#ffffff',
    fontFamily:"bold",
    textAlign: 'center',
    marginVertical: 25,
},
modalSubHeader:{
    fontSize: 20,
    marginBottom: 20,
    color: '#ffffff',
    fontFamily:"semibold"
},

});

export default AboutMe;
