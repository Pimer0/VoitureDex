import React, { useState } from "react";
import { View, TextInput } from "react-native";
import { StyleSheet } from "react-native";

const SearchBar = () => {
	const [searchText, setSearchText] = useState("");

	const handleSearch = () => {
		// Logique de recherche à implémenter ici
		console.log("Recherche effectuée :", searchText);
	};

	const handleSubmit = () => {
		handleSearch();
	};

	const styles = StyleSheet.create({
		bar: {
			backgroundColor: "#f0f0f0",
			padding: 10,
			borderRadius: 5,
			margin: 10,
			borderColor: "black",
			width: 300,
		},
	});

	return (
		<View>
			<TextInput
				placeholder="Plaque US ou UK"
				value={searchText}
				onChangeText={setSearchText}
				onSubmitEditing={handleSubmit}
				style={styles.bar}
			/>
		</View>
	);
};

export default SearchBar;
