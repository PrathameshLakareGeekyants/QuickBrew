import { ThemeProvider } from "@/components/ui/ThemeProvider/ThemeProvider";
import { Stack } from "expo-router";
import "react-native-reanimated";
import "./global.css";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="modal"
          options={{ presentation: "modal", title: "Modal" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
