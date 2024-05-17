import React from "react";
import { Text, View, StyleSheet } from "react-native";

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

const InfoBlock = () => {
	return (
		<View style={styles.block}>
			<Text style={styles.h1}>Recherchez une plaque d’immatriculation.</Text>
			<Text style={styles.p}>
				La plaque doit obligatoirement être UK ou US. Les FR viendront dans une
				prochaine MaJ.
			</Text>
		</View>
	);
};

export default InfoBlock;
