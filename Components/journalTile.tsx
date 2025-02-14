import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function JournalTile({ title }: { title: string }) {
    return (
    <TouchableOpacity style={styles.journalTile}>
        <Text style={styles.journalTitle}>{title}</Text>
        <Ionicons name='book' size={48} color='black' style={styles.journalIcon} />
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    journalTile: {
        width: 150,
        height: 150,
        flexDirection: 'column',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#FFD8A8',
        borderRadius: 8,
        margin: 8
    },

    journalTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 16
    },

    journalIcon: {
        marginTop: 8
    }
});