import {
  Text,
  Pressable,
  StyleSheet,
  ViewStyle,
  StyleProp,
} from "react-native";
import React from "react";

//props
type buttonProps = {
  //required props(*)
  text: string; 
  backgroundColor: string;
  activeColor: string;
  onClick: () => void

  //optional props
  textColor?: string;
  border?: { width: number; radius?: number; color?: string };
  style?: StyleProp<ViewStyle>;
  padding?: number;
  margin?: number;
};

const Button = (props: buttonProps) => {
  //Styles
  const styles = StyleSheet.create({
    btn: {
      backgroundColor: props.backgroundColor,
      borderWidth: props.border?.width ?? 0,
      borderRadius: props.border?.radius ?? 0,
      borderColor: props.border?.color ?? "transparent",
      padding: props.padding,
      alignItems: "center",
      marginHorizontal: props.margin || 100,
      overflow: "hidden",
    },
    text: {
      color: props.textColor ?? "#000",
      overflow: "hidden",
    },
  });
  return (
    <Pressable
      style={(state) => [
        styles.btn,
        props.style,
        { backgroundColor: state.pressed ? props.activeColor : props.backgroundColor },
      ]}
      onPress={props.onClick}
    >
      <Text style={styles.text}>{props.text}</Text>
    </Pressable>
  );
};

export default Button;
