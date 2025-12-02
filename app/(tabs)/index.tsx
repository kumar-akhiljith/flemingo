import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.body} className='text-primary'>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>flemingo</Text>
        <View style={styles.headerProfile} />
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 12,
    flex: 1,
  },

  /* ---------- Header ---------- */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '600',
  },
  headerProfile: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#666',
  },

  /* ---------- Chat Item ---------- */
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  avatar: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: '#666',
  },
  chatTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  chatName: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
  chatMessage: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 2,
  },
  unreadDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ff4081',
  },
});