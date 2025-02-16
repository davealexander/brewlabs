import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TileButton({ title }: { title: string }) {
    return (
    <TouchableOpacity style={styles.tileButton}>
        <Text style={styles.tileButtonText}>{title}</Text>
        <Ionicons name='book' size={48} color='black' style={styles.tileButtonIcon} />
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    tileButton: {
        width: 150,
        height: 150,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFD8A8',
        borderRadius: 8,
        margin: 8
    },

    tileButtonText: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16
    },

    tileButtonIcon: {
        marginTop: 8
    }
});