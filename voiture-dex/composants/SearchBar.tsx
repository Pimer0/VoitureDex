import React, { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

const SearchBar = ({
	onSearch,
}: {
	onSearch: (usstate: string, plate: string) => void;
}) => {
	const [value, setValue] = useState("");

	const handleSubmit = () => {
		const [usstate, plate] = value.split(" ");
		onSearch(usstate, plate);
	};

	const handleChange = (text: string) => {
		setValue(text);
	};

	return (
		<TextInput
			style={styles.bar}
			value={value}
			onChangeText={handleChange}
			onSubmitEditing={handleSubmit}
			placeholder="State (ex: MA) Plate (ex: 2THX88)"
		/>
	);
};

export default SearchBar;

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
