import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomNavigationBar = () => {
  const navigation = useNavigation();
  const [lightMode, setLightMode] = useState(true);
  const [showText, setShowText] = useState(false);

  const toggleMode = () => {
    setLightMode(!lightMode); 
  };

  return (
    <View style={[styles.container, lightMode ? styles.lightMode : styles.nightMode]}>      
      <TouchableOpacity oonPress={toggleMode} style={styles.iconContainer}>
        <Ionicons name="moon" size={24} color="black"  />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
        <Ionicons name="home" size={24} color="black" />
        {/* {showText && <Text style={styles.iconText}>Toggle Mode</Text>} */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AboutMe')} style={styles.iconContainer}>
        <Ionicons name="person" size={24} color="black" />
        {/* <Text style={styles.iconText}>About Me</Text> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AboutMe')} style={styles.iconContainer}>
        <Ionicons name="school" size={24} color="black" />
        {/* <Text style={styles.iconText}>About Me</Text> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AboutMe')} style={styles.iconContainer}>
        <Ionicons style={styles.icons} name="image" size={24} color="black" />
        {/* <Text style={styles.iconText}>About Me</Text> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AboutMe')} style={styles.iconContainer}>
        <Ionicons name="send" size={24} color="black" />
        {/* <Text style={styles.iconText}>About Me</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: "15%",
    right: 50,
    width: 70,
    height: '70%', 
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 30,
    borderRadius: 10,
    zIndex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    paddingVertical:12
  },
  iconText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  lightMode: {
    backgroundColor: '#fff', 
  },
  nightMode: {
    backgroundColor: '#000', 
  },
});

export default CustomNavigationBar;
