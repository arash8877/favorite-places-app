import { View, Image, Text, Pressable, StyleSheet } from "react-native";
import { Colors } from "../../constants/colors";

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.item, pressed && styles.pressed]}
      onPress={onSelect}
    >
      <Image source={{ uri: place.imageUri }} style={styles.image} />
      <View style={styles.info}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    alignItems: "flex-start",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary500,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.7,
  },
  image: {
    flex: 1,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  info: {
    flex: 2,
    padding: 12,
  },
  title: {
    fontWeight: "black",
    fontSize: 18,
    color: Colors.gray700,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
});
