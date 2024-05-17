import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { VOITURE_INTERPRETATION } from "../composants/const/VOITURE_INTERPRETATION";

interface VehiculeInfosProps {
	marque: string;
	modele: string;
	annee: number;
	imageUrl: string;
}

const styles = StyleSheet.create({
	h2: {
		fontSize: 24,
		fontWeight: "700",
		marginBottom: 10,
		color: "#A1A1AA",
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

const VehiculeInfos: React.FC<VehiculeInfosProps> = ({
	marque,
	modele,
	annee,
	imageUrl,
}) => {
	const voiture = VOITURE_INTERPRETATION.find((v) => v.name === marque);
	const logo = voiture ? voiture.image : null;
	console.log("Marque:", marque);
	console.log("Modèle:", modele);
	console.log("Année:", annee);

	return (
		<View style={styles.block}>
			<Text style={styles.h2}>Marque: {marque}</Text>
			<Text style={styles.h2}>Modèle: {modele}</Text>
			<Text style={styles.h2}>Année: {annee}</Text>
			{logo && <Image style={{ width: 50, height: 50 }} source={logo}></Image>}
		</View>
	);
};

export default VehiculeInfos;
