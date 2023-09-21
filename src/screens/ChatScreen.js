import { Text, View, FlatList } from "react-native";
import chats from "../../assets/data/chats.json";
import ChatList from "../components/ChatList";

const ChatScreen = () => {
  return (
    <FlatList
      data={chats}
      renderItem={({ item }) => <ChatList chat={item} />}
    />
  );
};

export default ChatScreen;
