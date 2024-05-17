import * as React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

const ButtonMyList = ({ navigation }: { navigation: any }) => {
	return (
		<View>
			<Text>Home Screen</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("MyList")}
			>
				<Text style={{ textAlign: "center" }}>Voir ma liste de bagnole</Text>
			</TouchableOpacity>
		</View>
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

export default ButtonMyList;
