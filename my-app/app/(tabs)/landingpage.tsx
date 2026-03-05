import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//Custom components
import Button from "../../components/Button";
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>hello</Text>
      <View>
      <Button
        text="Haaaai"
        backgroundColor="hsla(0, 49%, 57%, 0.94)"
        textColor="hsl(0, 0%, 19%)"
        activeColor="hsl(0, 69%, 68%)"
        border={{width:1,color:'rgb(64, 160, 255)',radius:5}}
        padding={10}
        style={styles.btn}
        onClick={()=>console.log("hellooo")}
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    flex:1,
  },
  btn:{
    paddingVertical:10,
    paddingHorizontal:10,
  },
});

export default App;
