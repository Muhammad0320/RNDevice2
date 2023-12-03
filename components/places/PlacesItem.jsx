import { Image, Pressable, StyleSheet, Text, View } from "react-native";

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

const styles = StyleSheet.create({});
