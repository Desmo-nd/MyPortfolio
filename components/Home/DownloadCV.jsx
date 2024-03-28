import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';
import { COLORS } from '../../constants';

const DownloadCVButton = () => {
  const handleDownloadCV = () => {
    const cvPath = 'assets/CV.pdf'; 

    Linking.openURL(cvPath)
      .then((supported) => {
        if (!supported) {
          console.error("File download not supported on this device.");
        }
      })
      .catch((error) => console.error("Error downloading file:", error));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleDownloadCV} style={styles.button}>
        <Text style={styles.buttonText}>Download CV</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 127,
    height: 40,
    alignSelf: 'center',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderColor:COLORS.primary,
    borderWidth: 1,

  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default DownloadCVButton;
