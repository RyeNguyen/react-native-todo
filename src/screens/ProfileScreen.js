import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';

const ProfileScreen = ({ navigation, route }) => {
  const { userProfile } = route.params;
  console.log(userProfile.avatar);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image style={styles.avatar} source={{uri: userProfile.avatar}} />
      <Text>{`My name is ${userProfile?.name}`}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Back Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'teal',
    marginBottom: 16
  },
  button: {
    backgroundColor: 'tomato',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
