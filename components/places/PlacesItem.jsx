import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Colors } from "../../util/colors";

function PlacesItem({ imageUri, title, address, id }) {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("PlaceDetails", { id });
  };

  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Image source={{ uri: imageUri }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.address}> {address} </Text>
      </View>
    </Pressable>
  );
}

export default PlacesItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary500,
    elevation: 4,
    borderRadius: 6,

    flexDirection: "row",
    alignItems: "flex-start",
    overflow: "hidden",
  },

  textContainer: {
    flex: 2,
    rowGap: 4,
    padding: 6,
  },

  title: {
    fontsize: 18,
    fontWeight: "bold",
    color: Colors.primary800,
  },

  address: {
    fontsize: 13,
    color: Colors.primary800,
  },

  pressed: {
    opacity: 0.85,
  },

  image: {
    flex: 1,
    height: 100,
  },
});
