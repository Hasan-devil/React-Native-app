import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/theme";
import { SafeAreaView } from "react-native-safe-area-context";

const more = () => {
  return (
    <SafeAreaView style={styles.body}>
      <View >
        <Text style={{color:Colors.dark.text,fontSize:30}}>more</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body:{
    backgroundColor:Colors.dark.bgPrimary,
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },
  container:{
    
  }
});

export default more;
