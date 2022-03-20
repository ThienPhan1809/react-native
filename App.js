import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import CategoryListItem from "./components/CategoryListItem";

const data = [
  { id: 1, name: "Dụng cụ trượt tuyết" },
  { id: 2, name: "Quần áo trượt tuyết" },
  { id: 3, name: "Kính Mũ" },
];

export default function App() {
  
  const renderItem = ({item}) => (<CategoryListItem title = {item.name} />)
  return (
    <View style={styles.container}>
      <FlatList 
        data={data}
        renderItem = {renderItem}
        keyExtractor = {item => `${item.id}`}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    paddingHorizontal: 8,
    justifyContent: "center",
    marginTop: 16,
  },
});
