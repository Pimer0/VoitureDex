import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./composants/pages/Home";
import MyList from "./composants/pages/MyList";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { SavedVehiclesContext } from "./composants/context/SavedVehiclesContext";
const Stack = createNativeStackNavigator();

export default function App() {
	const [savedVehicles, setSavedVehicles] = React.useState<any[]>([]);

	return (
		<SavedVehiclesContext.Provider value={{ savedVehicles, setSavedVehicles }}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="MyList" component={MyList} />
				</Stack.Navigator>
			</NavigationContainer>
		</SavedVehiclesContext.Provider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#09090B",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
});
