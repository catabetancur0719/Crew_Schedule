import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: "Iniciar sesión" }} />
      <Stack.Screen name="day-detail" options={{ title: "Detalles del día" }} />
      <Stack.Screen name="alert" options={{ title: "Alerta" }} />
    </Stack>
  );
}
