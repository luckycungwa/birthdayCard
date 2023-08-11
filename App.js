import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import BirthdayCard from './pages/BirthdayCard';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My Birthday Card Application</Text>
      <StatusBar style="auto" />
      <BirthdayCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
