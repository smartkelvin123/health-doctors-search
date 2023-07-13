import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (

    <View style={styles.container}>
      <View style= {styles.main}>
     

        <Text style={styles.title}>HELLO World!</Text>

      <Text>this is the first page</Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth : "900",
    marginHorizontal: "auto"

  },
  title :{
    fontSize : 64

  }
});
