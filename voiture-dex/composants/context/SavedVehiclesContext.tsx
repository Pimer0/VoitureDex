import React from "react";

type SavedVehiclesContextType = {
	savedVehicles: any[];
	setSavedVehicles: React.Dispatch<React.SetStateAction<any[]>>;
};

export const SavedVehiclesContext = React.createContext<
	SavedVehiclesContextType | undefined
>(undefined);
