import { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import PlacesList from "../components/places/PlacesList";

const AllPlaces = ({ route }) => {
  const [loadPlaces, setLoadPlaces] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && route.params) {
      setLoadPlaces((currentPlaces) => [...currentPlaces, route.params.place]);
    }
  }, [isFocused, route]);

  return <PlacesList places={loadPlaces}/>;
};

export default AllPlaces;
