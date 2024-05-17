import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { VOITURE_INTERPRETATION } from "../composants/const/VOITURE_INTERPRETATION";

interface SavedVehiculeProps {
	year: number;
	model: string;
	marque: string;
	imageUrl: string;
}

const SavedVehicule: React.FC<SavedVehiculeProps> = ({
	year,
	model,
	marque,
	imageUrl,
}) => {
	const voiture = VOITURE_INTERPRETATION.find((v) => v.name === marque);
	const logo = voiture ? voiture.image : null;
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
			{logo && <Image style={{ width: 50, height: 50 }} source={logo}></Image>}
		</View>
	);
};

export default SavedVehicule;
