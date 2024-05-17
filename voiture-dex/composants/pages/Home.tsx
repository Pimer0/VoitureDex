import React from "react";
import { View, StyleSheet } from "react-native";

import InfoBlock from "../InfoBlock";
import SearchBar from "../SearchBar";
import VehiculeInfos from "../VehiculeInfos";
import ButtonMyList from "../ButtonMyList";
import ButtonAdd from "../ButtonAdd";

const Home = ({ navigation }: { navigation: any }) => {
	return (
		<View style={styles.container}>
			<SearchBar />
			<InfoBlock />
			<VehiculeInfos marque="tesla" modele="S" annee={2023} couleur="rouge" />
			<ButtonMyList navigation={navigation} />
			<ButtonAdd title="Ajouter à ma liste" onPress={console.log} />
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
});

export default Home;
