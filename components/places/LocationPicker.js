import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import OutlinedButton from "../ui/OutlinedButton";
import { Colors } from "../../constants/colors";
import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus
} from "expo-location";

const LocationPicker = () => {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  async function verifyPermission () {
    if (locationPermissionInformation.status === PermissionStatus.UNDETERMINED) {
        const permissionResponse = await requestPermission();
        return permissionResponse.granted;
      }
      if (locationPermissionInformation.status === PermissionStatus.DENIED) {
        Alert.alert(
          "Insufficient Permission!",
          "You need to grant location permission to use this app."
        );
      }
      return true;
  }  

  async function getLocationHandler() {
    const hasPermission = await verifyPermission();

    if (!hasPermission) {return;}
    const location = await getCurrentPositionAsync();
    console.log(location);
  }

  function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>
      <View style={styles.action}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;

const styles = StyleSheet.create({
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  action: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
