import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
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
                  fontSize: 25,
                  fontFamily: "Montserrat-Bold",
                }}
              >
                Mohamed Hasan
              </Text>
              <Text
                style={{
                  color: "#c2a9a9",
                  fontSize: 15,
                  fontFamily: "Montserrat-Light",
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
                fontFamily: "Montserrat-Regular",
              }}
            >
              Hello! I'm Mohamed Hasan, a passionate web and mobile app
              developer with a knack for creating seamless digital experiences.
              With a strong foundation in both front-end and back-end
              technologies.
            </Text>
          </View>
        </View>
        <View id="others">
          <Text
            style={{
              color: Colors.dark.textStrong,
              fontSize: 20,
              marginTop: 30,
              marginLeft: 10,
              fontFamily: "Montserrat-Bold",
            }}
          >
            Known Skills
          </Text>
          <View style={styles.knownSkillsSection}>
            <View style={styles.skillsContainer} id="web_dev">
              <Image
                source={require("@/assets/images/logos/webdev.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 30,
                  //resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  color: "#434343",
                  fontSize: 16,
                  fontFamily: "Montserrat-SemiBold",
                  textAlign: "center",
                }}
              >
                Web Development
              </Text>
            </View>
            <View style={styles.skillsContainer} id="mobile_dev">
              <Image
                source={require("@/assets/images/logos/android.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  color: "#434343",
                  fontSize: 16,
                  fontFamily: "Montserrat-SemiBold",
                  textAlign: "center",
                }}
              >
                Mobile Development
              </Text>
            </View>
            <View style={styles.skillsContainer} id="front-end">
              <Image
                source={require("@/assets/images/logos/frontend.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  color: "#434343",
                  fontSize: 16,
                  fontFamily: "Montserrat-SemiBold",
                  textAlign: "center",
                }}
              >
                Frontend
              </Text>
            </View>
            <View style={styles.skillsContainer} id="back-end">
              <Image
                source={require("@/assets/images/logos/backend.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  color: "#434343",
                  fontSize: 16,
                  fontFamily: "Montserrat-SemiBold",
                  textAlign: "center",
                }}
              >
                Backend
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: Colors.dark.textStrong,
              fontSize: 20,
              fontFamily: "Montserrat-Bold",
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Programming Languages
          </Text>
          <View style={styles.LanguagesSection}>
            <View style={styles.skillsContainer} id="javascript">
              <Image
                source={require("@/assets/images/logos/Javascript.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  color: "#434343",
                  fontSize: 16,
                  fontFamily: "Montserrat-SemiBold",
                  textAlign: "center",
                }}
              >
                JavaScript
              </Text>
            </View>
            <View style={styles.skillsContainer} id="python">
              <Image
                source={require("@/assets/images/logos/python.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  color: "#434343",
                  fontSize: 16,
                  fontFamily: "Montserrat-SemiBold",
                  textAlign: "center",
                }}
              >
                Python
              </Text>
            </View>
            <View style={styles.skillsContainer} id="php">
              <Image
                source={require("@/assets/images/logos/php.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  resizeMode: "contain",
                }}
              />
              <Text
                style={{
                  color: "#434343",
                  fontSize: 16,
                  fontFamily: "Montserrat-SemiBold",
                  textAlign: "center",
                }}
              >
                PHP
              </Text>
            </View>
            <View style={styles.skillsContainer} id="Java">
              <Image
                source={require("@/assets/images/logos/java.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  resizeMode: "contain"
                }}
              />
              
              <Text
                style={{
                  color: "#434343",
                  fontSize: 16,
                  fontFamily: "Montserrat-SemiBold",
                  textAlign: "center",
                }}
              >
                Java
              </Text>
            </View>
            <View style={styles.skillsContainer} id="Kotlin">
              <Image
                source={require("@/assets/images/logos/kotlin.png")}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 10,
                }}
              />
              <Text
                style={{
                  color: "#434343",
                  fontSize: 16,
                  fontFamily: "Montserrat-SemiBold",
                  textAlign: "center",
                }}
              >
                Kotlin
              </Text>
            </View>
          </View>
          <Text
            style={{
              color: Colors.dark.textStrong,
              fontSize: 20,
              fontFamily: "Montserrat-Bold",
              marginTop: 10,
              marginLeft: 10,
            }}
          >
            Tech Stack
          </Text>
          <View style={styles.techStackSection}>
            <Text
              style={{
                color: Colors.dark.text,
                fontSize: 18,
                fontFamily: "Montserrat-SemiBold",
                marginBottom: 10,
                marginLeft: 10,
              }}
            >
              Frontend
            </Text>
            <ScrollView
              contentContainerStyle={styles.techscrollContainer}
              style={styles.techContainer}
              horizontal={true}
              // showsHorizontalScrollIndicator={false}
            >
              <Pressable style={styles.techBtn}>
                <Image
                  source={require("@/assets/images/logos/html.png")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#1A1A1A",
                    fontSize: 16,
                    fontFamily: "Montserrat-SemiBold",
                    textAlign: "center",
                  }}
                >
                  HTML
                </Text>
              </Pressable>
              <Pressable style={styles.techBtn}>
                <Image
                  source={require("@/assets/images/logos/css.png")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#1A1A1A",
                    fontSize: 16,
                    fontFamily: "Montserrat-SemiBold",
                    textAlign: "center",
                  }}
                >
                  CSS
                </Text>
              </Pressable>
              <Pressable style={styles.techBtn}>
                <Image
                  source={require("@/assets/images/logos/Javascript.png")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#1A1A1A",
                    fontSize: 16,
                    fontFamily: "Montserrat-SemiBold",
                    textAlign: "center",
                  }}
                >
                  JS
                </Text>
              </Pressable>
              <Pressable style={styles.techBtn}>
                <Image
                  source={require("@/assets/images/logos/react.png")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#1A1A1A",
                    fontSize: 16,
                    fontFamily: "Montserrat-SemiBold",
                    textAlign: "center",
                  }}
                >
                  React
                </Text>
              </Pressable>
              <Pressable style={styles.techBtn}>
                <Image
                  source={require("@/assets/images/logos/nextjs.png")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#1A1A1A",
                    fontSize: 16,
                    fontFamily: "Montserrat-SemiBold",
                    textAlign: "center",
                  }}
                >
                  NextJS
                </Text>
              </Pressable>
              <Pressable style={[styles.techBtn, { marginRight: 20 }]}>
                <Image
                  source={require("@/assets/images/logos/gsap.png")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#1A1A1A",
                    fontSize: 16,
                    fontFamily: "Montserrat-SemiBold",
                    textAlign: "center",
                  }}
                >
                  GSAP
                </Text>
              </Pressable>
            </ScrollView>
            <Text
              style={{
                color: Colors.dark.text,
                fontSize: 18,
                fontFamily: "Montserrat-SemiBold",
                marginBottom: 10,
                marginLeft: 10,
              }}
            >
              Backend
            </Text>
            <ScrollView
              contentContainerStyle={styles.techscrollContainer}
              style={styles.techContainer}
              horizontal={true}
              // showsHorizontalScrollIndicator={false}
            >
              <Pressable style={styles.techBtn}>
                <Image
                  source={require("@/assets/images/logos/php.png")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: "#fff",
                  }}
                />
                <Text
                  style={{
                    color: "#1A1A1A",
                    fontSize: 16,
                    fontFamily: "Montserrat-SemiBold",
                    textAlign: "center",
                  }}
                >
                  PHP
                </Text>
              </Pressable>
              <Pressable style={styles.techBtn}>
                <Image
                  source={require("@/assets/images/logos/flask.png")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#1A1A1A",
                    fontSize: 16,
                    fontFamily: "Montserrat-SemiBold",
                    textAlign: "center",
                  }}
                >
                  Flask
                </Text>
              </Pressable>
              <Pressable style={styles.techBtn}>
                <Image
                  source={require("@/assets/images/logos/mysql.png")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#1A1A1A",
                    fontSize: 16,
                    fontFamily: "Montserrat-SemiBold",
                    textAlign: "center",
                  }}
                >
                  MySQL
                </Text>
              </Pressable>
              <Pressable style={styles.techBtn}>
                <Image
                  source={require("@/assets/images/logos/nosql.png")}
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 10,
                  }}
                />
                <Text
                  style={{
                    color: "#1A1A1A",
                    fontSize: 16,
                    fontFamily: "Montserrat-SemiBold",
                    textAlign: "center",
                  }}
                >
                  Mongo{"\n"}DB
                </Text>
              </Pressable>
            </ScrollView>
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
    // backgroundColor: "hsl(0, 100%, 15%)",
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderBottomColor: "hsl(0, 14%, 40%)",
    paddingBottom: 20,
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
  LanguagesSection: {
    //backgroundColor: "hsl(332, 100%, 20%)",
    display: "flex",
    flexDirection: "row",
    marginTop: 10,
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    borderBottomWidth: 1,
    borderBottomColor: "hsl(0, 14%, 40%)",
    paddingBottom: 20,
  },
  techStackSection: {
    //backgroundColor: "hsl(0, 65%, 21%)",
    display: "flex",
    marginTop: 10,
    paddingVertical: 20,
  },
  techContainer: {
    height: 120,
    flex: 1,
    gap: 10,
    marginHorizontal: 20,
    backgroundColor: Colors.dark.surface,
    borderRadius: 10,
    flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-around",
    paddingHorizontal: 10,
    overflow: "scroll",
  },
  techscrollContainer: {
    alignItems: "center",
    justifyContent: "space-around",
    gap: 10,
  },
  techBtn: {
    backgroundColor: Colors.dark.accentSecondary,
    padding: 10,
    borderRadius: 10,
  },
});

export default profile;
