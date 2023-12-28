import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Colors } from "../../util/colors";
import { useCallback, useState } from "react";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import Place from "../../model/Place";

function PlacesForm({ onSaveData }) {
  const [label, setLabel] = useState("");

  const [pickedImage, setPickedImage] = useState("");

  const [pickedLocation, setPickedLocation] = useState("");

  const handleChangeText = (enteredText) => {
    setLabel(enteredText);
  };

  const handleTakeImage = (enteredImage) => {
    setPickedImage(enteredImage);
  };

  const handlePickLocation = useCallback((enteredLocation) => {
    setPickedLocation(enteredLocation);
  }, []);

  const handleSubmit = () => {
    const data = new Place(label, pickedLocation, pickedImage);

    onSaveData(data);
  };

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
      <ImagePicker onTakeImage={handleTakeImage} />
      <LocationPicker onPickLocation={handlePickLocation} />
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
