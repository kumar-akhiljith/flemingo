import { Ionicons } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MOCK_RENTALS = [
  {
    id: '1',
    price: '525',
    date: '12/10/2025',
    title: 'Double bed for Sharing - for one male (preferably Telugu)',
    description: 'Available from January 12th to Feb 26th* - 45 days\nCity centre, Dublin 01*, D01N8F2 -\n💵 Rent: €525 per month (excluding bills)\n🎓 20 mins to NCI...',
    poster: 'Anonymous person'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
  {
    id: '2',
    price: '800',
    date: '12/10/2025',
    title: '🏠 Permanent Accommodation Available for 1 MALE',
    description: 'Shared room in a well-maintained apartment near Maynooth University (North Campus)\n✨ Looking for someone who is neat, tidy, and responsible....',
    poster: 'John'
  },
];

const RentalCard = ({ item }) => (
  <TouchableOpacity activeOpacity={0.8} style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.priceText}>€{item.price}</Text>
      <Text style={styles.dateText}>{item.date}</Text>
    </View>

    <Text style={styles.titleText} numberOfLines={2}>
      {item.title}
    </Text>

    <Text style={styles.descriptionText} numberOfLines={4}>
      {item.description}
    </Text>

    <Text style={styles.posterText}>
      Posted by {item.poster}
    </Text>
  </TouchableOpacity>
);

export default function RentalFeed() {
  const insets = useSafeAreaInsets();
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
        <Text style={styles.screenTitle}>Renting</Text>
        <View style={styles.userProfilePlaceholder}>
           <Text style={styles.userName}>User name</Text>
           <View style={styles.avatarCircle} />
        </View>
      </View>

      {/* Filter Dropdown Placeholder */}
      <TouchableOpacity style={styles.filterSelector}>
        <Text style={styles.filterText}>Filter by location</Text>
        <Ionicons name="caret-down" size={16} color="#444" />
      </TouchableOpacity>

      {/* Listings */}
      <View style={styles.listWrapper}>
        <FlashList
          data={MOCK_RENTALS}
          renderItem={({ item }) => <RentalCard item={item} />}
          estimatedItemSize={200}
          contentContainerStyle={{ paddingBottom: 100 }}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {/* FAB (Floating Action Button) */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={40} color="black" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Pure black background
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  screenTitle: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '500',
  },
  userProfilePlaceholder: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userName: {
    color: '#ccc',
    marginRight: 10,
    fontSize: 16,
  },
  avatarCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
  },
  filterSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#111',
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    width: 180,
    borderWidth: 1,
    borderColor: '#222',
  },
  filterText: {
    color: '#888',
    marginRight: 10,
  },
  listWrapper: {
    flex: 1,
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#000',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  priceText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateText: {
    color: '#666',
    fontSize: 12,
  },
  titleText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 12,
    lineHeight: 22,
  },
  descriptionText: {
    color: '#bbb',
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 15,
  },
  posterText: {
    color: '#555',
    fontSize: 13,
  },
  fab: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#DFFF37', // Lime green color from image
    width: 70,
    height: 70,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});