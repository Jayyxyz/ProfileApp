import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import { StyleSheet, Text, View} from 'react-native';
import Profile from './components/Profile';

export default function App() {
  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <Profile/>
    </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'gray',
    
   
  },
  container: {
    flex: 1,
    
  }


});
