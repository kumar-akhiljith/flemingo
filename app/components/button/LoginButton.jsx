import { GOOGLE_EXPO_CLIENT_ID, GOOGLE_IOS_CLIENT_ID } from '@env';
import { GoogleSignin, isErrorWithCode, isSuccessResponse, statusCodes } from '@react-native-google-signin/google-signin';
import * as WebBrowser from 'expo-web-browser';
import { useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../constants/Colors';

WebBrowser.maybeCompleteAuthSession();

export default function LoginButton({ onLogin }) {

  useEffect(() => {
    GoogleSignin.configure({
        webClientId: GOOGLE_EXPO_CLIENT_ID, // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
        iosClientId: GOOGLE_IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist) Connect ID token.
        profileImageSize: 150, // [iOS] The desired height (and width) of the profile image. Defaults to 120px
    });
  },);

  const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const response = await GoogleSignin.signIn();
    if (isSuccessResponse(response)) {
      console.log({ userInfo: response.data });
    } else {
      console.log('Google Sign-In cancelled');
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // Android only, play services not available or outdated
          break;
        default:
        // some other error happened
      }
    } else {
      // an error that's not related to google sign in occurred
    }
  }
};

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={signIn}
    >
      <Text style={styles.text}>Login</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
