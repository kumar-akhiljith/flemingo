import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import welcomeImage from "../assets/images/welcome_house.png";
import Colors from "./constants/Colors";

const welcome_image_uri = Image.resolveAssetSource(welcomeImage).uri;

export default function IndexPage() {
  // return <Redirect href="/(tabs)/chats" />;
  const { top, bottom } = useSafeAreaInsets();

  return (
    <View style={[
        styles.container
        , { paddingTop: top, paddingBottom: bottom }
    ]}>
      <Image 
        source={{ uri: welcome_image_uri }} 
        style={styles.welcome_image} 
      />
      <Text style={styles.headline}>Welcome!</Text>
      <View style={{ flex: 1 }}>

      </View>
      <Text style={styles.description}>
          WhatsApp groups don't reach everyone. {"\n"}
          Share your vacant room in one place — for free and without hassle.
      </Text>
      <Link href="/rentals" asChild  style={{ marginBottom: bottom }}>
        <TouchableOpacity style={styles.button}> 
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.background,
  },
  welcome_image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 80,
    marginTop: 100,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Colors.text,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: Colors.text,
  },
  button: {
    marginTop: 30,
    fontSize: 18,
    backgroundColor: Colors.primary,
    color: Colors.text,
    padding: 10,
    width: '100%',
    textAlign: 'center',
    borderRadius: 5,
    //  styles for shadow
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 18,
  },
});