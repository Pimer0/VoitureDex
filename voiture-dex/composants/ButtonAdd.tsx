import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonProps {
	title: string;
	onPress: () => void;
}

const ButtonAdd: React.FC<ButtonProps> = ({ title, onPress }) => {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text style={{ textAlign: "center" }}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#09090B",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		marginTop: 20,
		backgroundColor: "#f0f0f0",
		padding: 10,
		borderRadius: 5,
		width: 300,
		textAlign: "center",
	},
});

export default ButtonAdd;
