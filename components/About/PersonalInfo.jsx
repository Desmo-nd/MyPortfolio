import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import DownloadCv from '../Home/DownloadCV';

const PersonalInfo = () => {

    return(
        <View style={styles.container}>
            <View style={styles.infoCont}>
                <View style={styles.left}>
                <Text style={styles.modalSubHeader}>PERSONAL INFO</Text>

                    <Text style={styles.modalText}>First Name: <Text style={styles.modalAnswer}>Desmond</Text></Text>
                    <Text style={styles.modalText}>Age: <Text style={styles.modalAnswer}>23</Text></Text>
                    <Text style={styles.modalText}>Phone: <Text style={styles.modalAnswer}>+254 740 524 75</Text></Text>
                    <Text style={styles.modalText}>GitHub: <Text style={styles.modalAnswer}>Desmo-nd</Text></Text>

                </View>
                <View style={styles.right}>

                    <Text style={[styles.modalText, {marginTop:50}]}>Last Name: <Text style={styles.modalAnswer}>Mwirigi</Text></Text>
                    <Text style={styles.modalText}>Country: <Text style={styles.modalAnswer}>Kenya</Text></Text>
                    <Text style={styles.modalText}>Email: <Text style={styles.modalAnswer}>mwirgdesmon@gmail.com</Text></Text>
                    <Text style={styles.modalText}>LinkedIn: <Text style={styles.modalAnswer}>DesmondMwirigi</Text></Text>

                </View>
            </View>
            <DownloadCv/>
        </View>
    )
}

export default PersonalInfo;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    infoCont:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    modalSubHeader:{
        fontSize: 20,
        marginBottom: 20,
        color: '#ffffff',
        fontFamily:"semibold"
    },
    modalText: {
        fontSize: 15,
        marginBottom: 20,
        color: '#ffffff',
    },
    modalAnswer: {
        fontSize: 15,
        marginBottom: 20,
        color: '#ffffff',
        fontWeight: 'bold',
    },
})