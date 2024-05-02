// import { View } from "react-native";

// const Place = () => {
//   return <View></View>;
// };

// export default Place;

class Place {
  constructor(title, imageUri, address, location) {
    this.title = title;
    this.imageUri = imageUri;
    this.address = address;
    this.location = location;
    this.id = new Date().toString() + Math.random().toString();
  }
}
