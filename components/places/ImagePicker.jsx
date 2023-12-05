import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { Alert, Button, View } from "react-native";

function ImagePicker() {
  const [cameraPermissionInfo, requestPermission] = useCameraPermissions();

  const verifyPermission = async () => {
    if (cameraPermissionInfo.status === PermissionStatus.UNDETERMINED) {
      const requestPermit = await requestPermission();

      return requestPermit.granted;
    }

    if (cameraPermissionInfo.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient permission",
        "This app need camera permisstion to function properly"
      );

      return false;
    }

    return true;
  };

  const handleTakeImage = async () => {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {
      return false;
    }

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
