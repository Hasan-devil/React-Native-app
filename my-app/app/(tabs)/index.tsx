import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { BlurView } from "expo-blur";
import { navigate } from "expo-router/build/global-state/routing";

const [_uname,_pword] = ["Hasan","1234"]

const Index = () => {
  const [focusedInput, setFocusedInput] = useState("");
  const [unameInput,setUnameInput] = useState("");
  const [pwordInput,setPwordInput] = useState("");
 // const [btnActive,setBtnActive] = useState(false);
  function handleClick() {
    if (unameInput===_uname && pwordInput===_pword){
      console.log("Correct 👍");
      Alert.alert("You're wellcome")
      
    }
    else{
      console.log("get out of here ");
      Alert.alert("Get out of here 😡")
      navigate('/landingpage')
    }
    //if (!btnActive) setBtnActive(true)
  }
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("@/assets/images/289203a3409d6a2447fe8993c9a90e02.jpg")}
        style={StyleSheet.absoluteFillObject}
        resizeMode="cover"
      />

      <SafeAreaView style={styles.safeArea}>
        <BlurView
          style={styles.container}
          intensity={5}
          experimentalBlurMethod="dimezisBlurView"
        >
          <Text style={styles.login_text}>Login</Text>

          <TextInput
            placeholder="email/username"
            placeholderTextColor="#555"
            style={[
              styles.input,
              {
                backgroundColor:
                  focusedInput === "username"
                    ? "rgba(255, 255, 255, 0.7)"
                    : "rgba(255, 255, 255, 0.52)",
              },
            ]}
            onFocus={() => setFocusedInput("username")}
            onBlur={() => setFocusedInput("")}
            onChangeText={setUnameInput}
            value={unameInput}
            
          />

          <TextInput
            placeholder="password"
            placeholderTextColor="#555"
            secureTextEntry
            style={[
              styles.input,
              {
                backgroundColor:
                  focusedInput === "password"
                    ? "rgba(255, 255, 255, 0.7)" 
                    :"rgba(255, 255, 255, 0.52)",
              },
            ]}
            onFocus={() => setFocusedInput("password")}
            onBlur={() => setFocusedInput("")}
            onChangeText={setPwordInput}
            value={pwordInput}
            
          />


          {/* <TouchableOpacity style={styles.submit_btn} onPress={handleClick}>
            <Text style={styles.button_text}>Login</Text>
          </TouchableOpacity> */}
        </BlurView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.15)", // more visible
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.08)",
    paddingVertical: 25,
    paddingHorizontal: 20,
    width: "85%",
    alignItems: "center",
    overflow: "hidden",
    shadowColor: "#000",
    elevation: 20,
  },
  login_text: {
    fontSize: 30,
    marginBottom: 25,
    fontWeight: "500",
    color: "hsla(0, 0%, 0%, 0.54)",
  },

  input: {
    height: 45,
    width: "100%",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "hsla(0, 0%, 1%, 0.61)",
    paddingHorizontal: 12,
    marginVertical: 8,
    // backgroundColor: 'rgba(255, 255, 255, 0.52)',
  },

  submit_btn: {
    marginTop: 20,
    backgroundColor: "hsla(171, 56%, 75%, 0.75)",
    borderWidth: 2,
    borderColor: "hsl(171, 58%, 52%)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  submit_btn_active: {
    marginTop: 20,
    backgroundColor: "hsla(0, 0%, 100%, 0.75)",
    borderWidth: 2,
    borderColor: "hsl(171, 58%, 52%)",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },

  button_text: {
    fontSize: 16,
    fontWeight: "bold",
  },



});

export default Index;
