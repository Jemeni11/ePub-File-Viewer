import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Alert } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
var JSZip = require("jszip");

export default function Home({ navigation }) {
  var zipObj = new JSZip();

  const zipEntriesNamesArray = [];

  const pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({
      type: ["application/epub+zip", "application/oebps-package+xml"],
    });

    FileSystem.readAsStringAsync(result.uri, { encoding: "base64" })
      .then((data) => {
        zipObj
          .loadAsync(data, { base64: true })
          .then((zip) => {
            zip.forEach((relativePath, zipEntry) => {
              zipEntriesNamesArray.push({
                id: `${zipEntry.name.substring(0, 4)}${Math.random()}`,
                name: zipEntry.name,
              });
            });
          })
          .then(
            navigation.navigate("ePub Files Screen", {
              src: zipEntriesNamesArray,
            })
          )
          .catch((err) => {
            Alert.alert(
              "Error",
              `There was an error opening the ePub file. This is a JSZip error. Error: ${err}`
            );
          });
      })
      .catch((err) => {
        Alert.alert(
          "Error",
          `There was an error opening the ePub file. This is a FileSystem error. Error: ${err}`
        );
      });
  };

  return (
    <View style={styles.container}>
      <Pressable
        onPress={pickDocument}
        style={{ backgroundColor: "red", padding: 30 }}
      >
        <Text style={{ fontSize: 20, textAlign: "center" }}>
          Open the Document Picker and select an ePub file!
        </Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
