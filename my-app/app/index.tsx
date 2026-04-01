import { Redirect } from "expo-router";
import { isLoggedIn } from "./(auth)/login";

export default function Index() {
  if (isLoggedIn) {
    return <Redirect href="/(tabs)/landingpage" />;
  }

  return <Redirect href="/(tabs)/profile" />;
}