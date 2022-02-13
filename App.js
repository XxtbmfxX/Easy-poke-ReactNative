import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation/Navigation.js";
import { AuthProvider } from "./src/context/AuthContext.js";

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
