import { View, TextInput, StyleSheet } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const inputBox = () => {
  const [newMessage, setNewMessage] = useState("");

  const onSend = () => {
    console.warn("sending Message: ", newMessage);
    setNewMessage("");
  };
  return (
    <View style={styles.container}>
      <AntDesign name="plus" size={20} color="royalblue" />
      <TextInput
        value={newMessage}
        onChangeText={setNewMessage}
        style={styles.input}
        placeholder="type your message..."
      />
      <MaterialIcons
        onPress={onSend}
        name="send"
        size={20}
        color="white"
        style={styles.send}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 15,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
    fontSize: 16,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 5,
    borderRadius: 15,
    overflow: "hidden",
  },
});
export default inputBox;
