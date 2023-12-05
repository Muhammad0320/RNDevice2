import { View } from "react-native";
import OutlinedButton from "../ui/OutlinedButton";

function LocationPicker() {
  const handleCurrentLocation = () => {};

  const handlePickLocation = () => {};

  return (
    <View>
      <View> </View>

      <View>
        <OutlinedButton icon="location" onPress={handleCurrentLocation}>
          current location
        </OutlinedButton>
        <OutlinedButton icon={"map"} onPress={handlePickLocation}>
          Pick on map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;
