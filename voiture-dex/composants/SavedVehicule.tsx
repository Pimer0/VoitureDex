import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface SavedVehiculeProps {
	year: number;
	model: string;
	marque: string;
}

const SavedVehicule: React.FC<SavedVehiculeProps> = ({
	year,
	model,
	marque,
}) => {
	const [savedYear] = React.useState(year);
	const [savedModel] = React.useState(model);
	const [savedMarque] = React.useState(marque);
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
			backgroundColor: "#18181B",
			borderRadius: 5,
			borderColor: "#71717A",
			width: 300,
		},
	});

	return (
		<View style={styles.block}>
			<Text style={styles.p}>Year: {savedYear}</Text>
			<Text style={styles.p}>Model: {savedModel}</Text>
			<Text style={styles.p}>Marque: {savedMarque}</Text>
		</View>
	);
};

export default SavedVehicule;
