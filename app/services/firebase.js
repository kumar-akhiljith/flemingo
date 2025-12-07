// app/services/firebase.ts

// This import ensures the base Firebase app is initialized 
// using the config files referenced in app.json.
import '@react-native-firebase/app'; 
// Import the specific authentication module
import auth from '@react-native-firebase/auth';

/**
 * The auth object provides all methods needed for phone number login and OTP verification.
 */
export { auth };
