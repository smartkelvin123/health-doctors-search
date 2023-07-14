import { Text, View } from "react-native";
import react, { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";

const SearchScreen = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        onchangeText: (event) => setSearch(event.nativeEvent.Text),
      },
    });
  }, [navigation]);
  return (
    <View>
      <Text>SearchScreen: {search}</Text>
    </View>
  );
};

export default SearchScreen;
