import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/theme";

const profile = () => {
  return (
    <SafeAreaView style={styles.body}>
      <ScrollView>
        <View id="about">
          <View style={styles.profileSection}>
            <View id="profile-picture" style={styles.profilePicture}>
              <Image
                source={require("@/assets/images/app_images/person.png")}
                style={{
                  width: 100,
                  height: 100,
                }}
              />
            </View>
            <View id="profile-info" style={styles.profileInfo}>
              <Text
                style={{
                  color: Colors.dark.textStrong,
                  fontSize: 30,
                  fontWeight: "bold",
                }}
              >
                Mohamed Hasan
              </Text>
              <Text
                style={{
                  color: "#c2a9a9",
                  fontSize: 15,
                }}
              >
                -Web Developer{"\n"}
                -Mobile App Developer
              </Text>
            </View>
          </View>
          <View style={styles.aboutSection}>
            <Text
              style={{
                color: Colors.dark.text,
                fontSize: 16,
                fontWeight: "700",
                letterSpacing: 0.5,
              }}
            >
              Hello! I'm Mohamed Hasan, a passionate web and mobile app
              developer with a knack for creating seamless digital experiences.
              With a strong foundation in both front-end and back-end
              technologies.
            </Text>
          </View>
        </View>
        <View id="others" >
          <Text
            style={{
              color: Colors.dark.textStrong,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 30,
              marginLeft: 10,
            }}
          >
            Known Skills
          </Text>
          <View style={styles.knownSkillsSection}>
            <View style={styles.skillsContainer}>
              <Image
                source={require("@/assets/images/logos/Javascript.png")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
              <Text
                style={{
                  color: "#434343",
                  fontSize: 18,
                }}
              >
                Web Development
              </Text>
            </View>
            <View style={styles.skillsContainer}>
              <Image
                source={require("@/assets/images/logos/Javascript.png")}
                style={{
                  width: 50,
                  height: 50,
                }}
              />
              <Text
                style={{
                  color: "#434343",
                  fontSize: 18,
                }}
              >
                JavaScript
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.dark.bgPrimary,
    flex: 1,
  },
  profilePicture: {
    backgroundColor: Colors.dark.surface,
    width: 100,
    height: 100,
    marginLeft: 20,
    borderRadius: 20,
    padding: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  profileInfo: {
    borderLeftWidth: 1,
    borderLeftColor: "hsl(0, 14%, 40%)",
    paddingLeft: 10,
    paddingVertical: 10,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  aboutSection: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  knownSkillsSection: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
  },
  skillsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: Colors.dark.surface,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    height: 120,
    width: 165,
  },
});

export default profile;
