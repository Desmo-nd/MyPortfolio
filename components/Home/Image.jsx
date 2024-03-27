import React from "react";
import { Image, StyleSheet, View } from "react-native";

const ImageComponent = () => {
    return (
    
    <View style={styles.imageCont}>
        <View style={styles.container}>
            <Image
                style={styles.image}
                resizeMode="cover"
                source={{
                uri: "../assets/images/mali.jpg",
                }}
            />
        </View>
  </View>
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
    imageCont:{
        height: '70%',
        width: '48%',
        backgroundColor: '#ffffff',
        position: 'absolute',
        zIndex: 1,
        left: -240,
        borderRadius: 30,
      },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1,
        borderRadius: 10,
    },
    image: { 
        width: "100%", 
        height: "100%" ,
        borderRadius: 30,

    }
});