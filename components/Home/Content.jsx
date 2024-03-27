import React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Image, Button, ScrollView } from "react-native";
import { SIZES } from "../../constants";

const Content = () => {
    return (
    
    <View style={styles.Container}>
        <View style={styles.content}>
            <Text style={styles.title}>I'm Desmond Murangiri</Text>
            <Text style={styles.title}>I'm a Software Engineer</Text>

            <Text style={styles.subhead}>
                Hi, I'm a Fullstack  Devloperwith More Than Two Years Of 
                Experience In Designing  And Building Resposive Web Apps 
                And Android Apps.
            </Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>MORE ABOUT ME</Text>
            </TouchableOpacity>
        </View>
  </View>
  );
};

export default Content;

const styles = StyleSheet.create({
    Container:{
        width:"100%",
    },
    content: {
        padding: 0,
        paddingHorizontal: 40,
        width: "72%",
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