import React from "react";
import { Text, StyleSheet, View } from "react-native";
import SavedVehicule from "../SavedVehicule";
import { SavedVehiclesContext } from "../context/SavedVehiclesContext";

const MyList = () => {
	const context = React.useContext(SavedVehiclesContext);
	if (!context) {
		throw new Error("SavedVehiclesContext is undefined");
	}
	const { savedVehicles } = context;

	return (
		<View style={styles.block}>
			<Text style={styles.p}>Ma liste de bagnole</Text>
			{savedVehicles.map((vehicle, index) => (
				<SavedVehicule key={index} {...vehicle} />
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	h1: {
		fontSize: 24,
		fontWeight: "700",
		marginBottom: 10,
		color: "#f0f0f0",
	},
	p: {
		fontSize: 16,
		color: "#f0f0f0",
	},
	block: {
		padding: 20,
		margin: 10,
		backgroundColor: "#09090B",
		borderRadius: 5,
		borderColor: "#71717A",
	},
});

export default MyList;
