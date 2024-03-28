import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const Grid = () => {
    return (
    <View style={styles.grid}>
        <View style={styles.gridItem}>
            <Text style={styles.itemNum}>2+</Text>
            <Text style={styles.itemText}>Years of Experience</Text>
        </View>
        <View style={styles.gridItem}>
            <Text style={styles.itemNum}>15+</Text>
            <Text style={styles.itemText}>Completed Projects</Text>
        </View>
        <View style={styles.gridItem}>
            <Text style={styles.itemNum}>7</Text>
            <Text style={styles.itemText}>Happy Customers</Text>
        </View>
        <View style={styles.gridItem}>
            <Text style={styles.itemNum}>1</Text>
            <Text style={styles.itemText}>Awards</Text>
        </View>
    </View>
    )
}

export default Grid;

const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        width: '50%',
        
      },
      gridItem: {
        width: '35%',
        height: 140,
        // backgroundColor: '#007bff', 
        borderRadius: 10,
        borderColor: COLORS.primary,
        borderWidth: 2,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginBottom: 20,
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 15,
      },
      itemText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
      },
      itemNum:{
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
      },
})