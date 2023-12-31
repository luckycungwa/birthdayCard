import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import BirthdayCard from "./pages/BirthdayCard";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My Birthday Card | Application status Bar</Text>
      <StatusBar style="auto" />
      <View style={styles.main}>
        <BirthdayCard />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "stretch",
    justifyContent: "center",
    fontFamily: "Montserrat", //seems not not work
    
  },
  main: {
    flex: 3,
    alignItems: "stretch",
    justifyContent: "center",
  },
});
