import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigator from "./src/navigation";
// import ChatPage from "./src/screens/ChatPage";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ChatScreen /> */}
      <Navigator />
      {/* <ChatPage /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 50,
  },
});
