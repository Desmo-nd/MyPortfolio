import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Linking } from 'react-native';

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
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});

export default DownloadCVButton;
