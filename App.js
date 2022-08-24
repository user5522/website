import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
    
      <Text style={styles.title}><a href="https://github.com/user5522" rel="noreferrer">user5522</a></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 25,
    alignItems: "stretch",
    position: "absolute",
    top: 25,
    left: 25,
  },
});
