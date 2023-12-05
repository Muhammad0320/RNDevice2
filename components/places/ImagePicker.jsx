import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../util/colors";

function ImagePicker() {
  const [cameraPermisssionInfo, requestPermission] = useCameraPermissions();

  const [imagePreview, setImagePreview] = useState("");

  const verifyPermission = async () => {
    if (cameraPermisssionInfo.status === PermissionStatus.UNDETERMINED) {
      const PermissionResnponse = await requestPermission();

      return PermissionResnponse.granted;
    }

    if (cameraPermisssionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permission",
        "You need to grant camera permission to use this app effectively"
      );

      return false;
    }

    return true;
  };

  const handleTakeImage = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return;
    }

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.6,
    });

    setImagePreview(image.uri);
  };

  let content = <Text> No image yet, add image to preview </Text>;

  if (imagePreview) {
    content = <Image source={{ uri: imagePreview }} />;
  }

  return (
    <View>
      <View> </View>
      <Button title="Take image" onPress={handleTakeImage} />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary100,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 200,
    borderRadius: 4,

    marginVertical: 10,
    overflow: "hidden",
  },

  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
});