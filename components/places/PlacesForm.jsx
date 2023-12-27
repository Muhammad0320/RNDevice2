import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Colors } from "../../util/colors";
import { useState } from "react";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

function PlacesForm() {
  const [label, setLabel] = useState("");

  const handleChangeText = (enteredText) => {
    setLabel(enteredText);
  };

  const handleSubmit = () => {};

  return (
    <ScrollView style={styles.form}>
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>

        <TextInput
          style={styles.input}
          onChangeText={handleChangeText}
          value={label}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
      <Button onPress={handleSubmit}>Add Place</Button>
    </ScrollView>
  );
}

export default PlacesForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },

  label: {
    fontWeight: "bold",
    color: Colors.primary500,
  },

  container: {
    rowGap: 8,
  },

  input: {
    backgroundColor: Colors.primary100,
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary700,
    fontSize: 18,
  },
});
