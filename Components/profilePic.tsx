import {TouchableOpacity, Image, StyleSheet} from 'react-native';

export default function ProfilePic () {
    return (
        <TouchableOpacity style={styles.profilePicButton}>
            <Image source={require('../assets/images/react-logo.png')} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    profilePicButton:{
        display: 'flex',
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});