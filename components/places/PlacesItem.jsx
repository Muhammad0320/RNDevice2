import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../util/colors";

function PlacesItem({ imageUri, title, address }) {
  return (
    <Pressable>
      <Image source={{ uri: imageUri }} />
      <View>
        <Text> {title} </Text>
        <Text> {address} </Text>
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
