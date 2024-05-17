import React from "react";
import { View, Text, StyleSheet } from "react-native";

interface VehiculeInfosProps {
	marque: string;
	modele: string;
	annee: number;
	couleur: string;
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
	couleur,
}) => {
	return (
		<View style={styles.block}>
			<Text style={styles.h2}>Marque: {marque}</Text>
			<Text style={styles.h2}>Modèle: {modele}</Text>
			<Text style={styles.h2}>Année: {annee}</Text>
			<Text style={styles.h2}>Couleur: {couleur}</Text>
		</View>
	);
};

export default VehiculeInfos;
