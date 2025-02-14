import React, { useState } from 'react';
import { Pressable, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function BrewCard() {
    const [isPressed, setIsPressed] = useState(false);
    
    return (
        <Pressable style={styles.pressableCard} onPress={() => setIsPressed(!isPressed)}>
        <Ionicons name='beer' size={60} color='black' style={styles.brewPic} />
        <TouchableOpacity 
            style={[styles.cardInfo, 
                    {backgroundColor: isPressed ? '#4CAF50' : '#00FFBF'}]}
                    onPressIn={() => setIsPressed(true)}
                    onPressOut={() => setIsPressed(false)}
        >   
            <Text>Brew #1</Text>
            <Text>ABV: 4.5%</Text>
            <Text>Type: Pale Ale</Text>
            <Text>Created: 1/1/2023</Text>
            <Text>Last Updated: 1/1/2023</Text>
        </TouchableOpacity>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    brewTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    pressableCard:{
        display: 'flex',
        flexDirection: 'row',
        margin: 16,
        width: '85%',
        height: 105,
        borderWidth: 1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderRadius: 5,
    },
    cardInfo:{
        flex: 1,
        paddingTop: 8,
        paddingLeft: 8
    },
    brewPic:{
        paddingTop: 16,
        paddingLeft: 8
    },

})