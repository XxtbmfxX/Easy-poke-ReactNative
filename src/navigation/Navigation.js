import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";

import FavoriteNavigation from "./FavoriteNavigation.js";
import PokedexNavigation from "./PokedexNavigation.js";
import AccountNavigation from "./AccountNavigation.js";

const renderImage = () => (
  <Image
    source={require("../assets/deku_icon.png")}
    style={{ width: 75, height: 75, top: -15 }}
  />
);

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarIcon: () => renderImage(),
          headerShown: false,
          title: "",
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarIcon: (color, size) => (
            <FontAwesome name="user" color={color} size={size} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
