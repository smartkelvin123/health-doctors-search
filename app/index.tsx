import { StyleSheet, Text, View } from 'react-native';


import {AntDesign} from "@expo/vector-icons"

export default function App() {
  return (

    <View style={styles.container}>
      <View style= {styles.main}>
        <View style= {styles.SearchBar}>
            <Text>search for doctors, appointment</Text>
            <AntDesign name="search1" size ={24} color ="black" />
        </View>
      

        <Text style={styles.title}>HELLO World!</Text>

      <Text>this is the first page</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "fff",
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    main:{
      flex: 1,

      alignItems: 'center',
      maxWidth : "900",
      marginHorizontal: "auto"
  
    },
    title :{
      fontSize : 64,
      fontWeight: "bold"
    },
    subtitle : {
      fontSize : 36,
      color : "#384360"
    }, 
    SearchBar: {
        borderWidth : StyleSheet.hairlineWidth,
        padding: 10,
        borderRadius : 50,
        justifyContent: "space-between",
        alignItems : "center"

    }

  
  });