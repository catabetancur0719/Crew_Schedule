import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="day-detail" options={{ title: "Schedule" }} />
      <Stack.Screen name="alert" options={{ title: "Alert" }} />
    </Stack>
  );
}
