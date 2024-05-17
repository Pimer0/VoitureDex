import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { REACT_APP_RAPIDAPI_KEY } from "@env";
import InfoBlock from "../InfoBlock";
import SearchBar from "../SearchBar";
import VehiculeInfos from "../VehiculeInfos";
import ButtonMyList from "../ButtonMyList";
import ButtonAdd from "../ButtonAdd";

const Home = ({ navigation }: { navigation: any }) => {
	const [usstate, setUsstate] = useState<string | null>(null);
	const [plate, setPlate] = useState<string | null>(null);
	const [vehicleData, setVehicleData] = useState<any>(null);

	useEffect(() => {
		const fetchData = async () => {
			if (usstate && plate) {
				const url = `https://apibroker-license-plate-search-v1.p.rapidapi.com/license-plate-search?format=json&state=${usstate}&plate=${plate}`;
				const options: RequestInit = {
					method: "GET",
					headers: {
						"X-RapidAPI-Key": REACT_APP_RAPIDAPI_KEY,
						"X-RapidAPI-Host":
							"apibroker-license-plate-search-v1.p.rapidapi.com",
					} as HeadersInit,
				};

				try {
					const response = await fetch(url, options);
					const result = await response.json();
					console.log(result);
					setVehicleData(result);
				} catch (error) {
					console.error(error);
				}
			}
		};

		fetchData();
	}, [usstate, plate]);

	return (
		<View style={styles.container}>
			<SearchBar
				onSearch={(usstate, plate) => {
					setUsstate(usstate);
					setPlate(plate);
				}}
			/>
			<InfoBlock />
			<VehiculeInfos
				marque={
					vehicleData && vehicleData.content.make
						? vehicleData.content.make
						: ""
				}
				modele={
					vehicleData && vehicleData.content.model
						? vehicleData.content.model
						: ""
				}
				annee={
					vehicleData && vehicleData.content.year ? vehicleData.content.year : 0
				}
			/>
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
	},
});

export default Home;
