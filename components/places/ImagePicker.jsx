import { launchCameraAsync } from "expo-image-picker";
import { Button, View } from "react-native";

function ImagePicker() {
  const handleTakeImage = async () => {
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.6,
    });

    console.log(image);
  };

  return (
    <View>
      <View></View>
      <Button title="Take image" onPress={handleTakeImage} />
    </View>
  );
}

export default ImagePicker;
