import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
function CategoryListItem(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <Image style={styles.categoryImage} source={require('../assets/icon.png')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
    marginVertical: 8,
    marginHorizontal: 16
  },
  title: {
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "700",
    marginBottom: 8
  },
  categoryImage: {
      width: 64,
      height: 64,
      marginVertical: 12
  }
});

export default CategoryListItem;
