import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, TextInput } from 'react-native';
import ProfilePic from '../Components/profilePic';

export default function Profile () {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showSave, setShowSave] = useState(false);

  // Update showSave when input fields are not empty
  useEffect(() => {
    if (username != '' || email != '' || password != '') {
      setShowSave(true);
    } else
      setShowSave(false);
  }, [username, email, password]);

  // Validate password
  useEffect(() => {
    if (password != confirmPassword) {
      
    }
  }, [password, confirmPassword]);

  return (
    <SafeAreaView>
      <Text style={styles.profileTitle}>Profile</Text>
      <View style={styles.profilePicBanner}>
        <ProfilePic />
      </View>
      <View>
        <Text style={styles.profileLabels}>Username</Text>
        <TextInput style={styles.profileInput} onChangeText={setUsername} value={username} />
        <Text style={styles.profileLabels}>Email</Text>
        <TextInput style={styles.profileInput} onChangeText={setEmail} value={email} />
        <Text style={styles.profileLabels}>Password</Text>
        <TextInput style={styles.profileInput} onChangeText={setPassword} value={password} secureTextEntry />
        <Text style={styles.profileLabels}>Confirm Password</Text>
        <TextInput style={styles.profileInput} onChangeText={setConfirmPassword} value={confirmPassword} secureTextEntry />
        {showSave && 
        <TouchableOpacity style={styles.profileEditButton} onPress={() => {setShowSave(false), setUsername(username), setEmail(email), setPassword(password)}}>
          <Text>Save</Text>
        </TouchableOpacity>}
        <TouchableOpacity style={styles.profileLogoutButton}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  profileTitle: {
    paddingLeft: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  profilePicBanner:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 75,
    marginTop: 32,
    marginBottom: 32,
  },
  profileLabels:{
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
    marginTop: 8
  },
  profileInput:{
    width: '90%',
    height: 40,
    backgroundColor: '#FFFFFF',
    marginLeft: 16,
  },
  profileEditButton:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#FFFFFF',
    marginLeft: 16,
    marginTop: 16,

  },
  profileLogoutButton:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 50,
    backgroundColor: '#FFFFFF',
    marginLeft: 16,
    marginTop: 16,
  },
});