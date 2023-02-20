import React from "react";
import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";

const EpubFiles = ({ route }) => {
  const { src } = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={src}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}> - {item.name}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default EpubFiles;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: "black",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 22,
    color: "white"
  },
});
