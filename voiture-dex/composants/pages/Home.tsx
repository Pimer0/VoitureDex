import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { REACT_APP_RAPIDAPI_KEY } from "@env";
import InfoBlock from "../InfoBlock";
import SearchBar from "../SearchBar";
import VehiculeInfos from "../VehiculeInfos";
import ButtonMyList from "../ButtonMyList";
import ButtonAdd from "../ButtonAdd";
import SavedVehicule from "../SavedVehicule";
import { SavedVehiclesContext } from "../context/SavedVehiclesContext";
import { useContext } from "react";

type SavedVehiculeProps = {
	year: number;
	model: string;
	marque: string;
};

const Home = ({ navigation }: { navigation: any }) => {
	const savedVehiclesContext = useContext(SavedVehiclesContext);
	const [usstate, setUsstate] = useState<string | null>(null);
	const [plate, setPlate] = useState<string | null>(null);
	const [vehicleData, setVehicleData] = useState<any>(null);

	if (!savedVehiclesContext) {
		throw new Error("SavedVehiclesContext is undefined");
	}
	const { savedVehicles, setSavedVehicles } = savedVehiclesContext;

	useEffect(() => {
		if (vehicleData && vehicleData.content) {
			setSavedVehicles((prevVehicles) => [
				...prevVehicles,
				{
					year: vehicleData.content.year,
					model: vehicleData.content.model,
					marque: vehicleData.content.make,
				},
			]);
		}
	}, [vehicleData]);

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
		<ScrollView>
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
						vehicleData && vehicleData.content.year
							? vehicleData.content.year
							: 0
					}
				/>
				<ButtonMyList navigation={navigation} />
				<ButtonAdd
					title="Ajouter à ma liste"
					onPress={() => {
						const newVehicle = {
							year: vehicleData?.content.year,
							model: vehicleData?.content.model,
							marque: vehicleData?.content.make,
						};
					}}
				/>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#09090B",
		alignItems: "center",
		padding: 30,
	},
});

export default Home;
