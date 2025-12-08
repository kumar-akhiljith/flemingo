import { Link } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import welcomeImage from "../assets/images/flamingo_index.png";

const welcome_image_uri = Image.resolveAssetSource(welcomeImage).uri;

export default function IndexPage() {
  // return <Redirect href="/(tabs)/chats" />;
  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: welcome_image_uri }} 
        style={styles.welcome_image} 
      />
      <Text style={styles.headline}>Welcome to Flamingo!</Text>
      {/* <Text style={styles.description}>
          Read our{' '}
          <Text style={styles.link}>
            Privacy Policy
          </Text>{' '}
          and{' '}
          <Text style={styles.link}>
            Terms of Service
          </Text>
      </Text> */}
      <Link href="/(auth)/login" asChild>
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
    backgroundColor: '#fff',
  },
  welcome_image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 80,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    marginTop: 30,
    fontSize: 18,
    backgroundColor: '#EF7D8B',
    color: '#FFFFFF',
    padding: 10,
    width: '100%',
    textAlign: 'center',
    borderRadius: 5,
  },
});