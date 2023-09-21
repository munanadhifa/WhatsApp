import { Text, View, StyleSheet } from "react-native";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

const messages = ({ messages }) => {
  const isMessage = () => {
    return messages.user.id === "u1";
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isMessage() ? "#DCF8C5" : "white",
          alignSelf: isMessage() ? "flex-end" : "flex-start",
        },
      ]}
    >
      <Text>{messages.text}</Text>
      <Text style={styles.time}>{dayjs(messages.createdAt).fromNow(true)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 10,
    borderRadius: 10,
    maxWidth: "80%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  time: {
    color: "gray",
    alignSelf: "flex-end",
  },
});

export default messages;
