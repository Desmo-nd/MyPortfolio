import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomNavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.iconContainer}>
        <Ionicons name="home" size={24} color="black" />
        {/* <Text style={styles.iconText}>Home</Text> */}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('AboutMe')} style={styles.iconContainer}>
        <Ionicons name="person" size={24} color="black" />
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
    paddingTop: 50,
    borderRadius: 10,
    zIndex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  iconText: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomNavigationBar;
