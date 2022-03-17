import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, ScrollView } from "react-native";
import CatagoryListItem from "./components/CategoryListItem";

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <CatagoryListItem title = 'Trượt tuyết' />
      <CatagoryListItem title = 'aaaa' />
      <CatagoryListItem title = 'Hello' />
      <CatagoryListItem title = 'Hello' />
      <CatagoryListItem title = 'Hello' />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 24,
  },
});
