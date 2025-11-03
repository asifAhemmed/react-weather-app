import { useState } from "react";
import { LocationContext } from "../context";


const LocationProvider = ({children}) => {
    const [selectedLocation, setSelectedLocation] = useState({
        longitude: 0,
        latitude: 0,
        location: "",
    });
    return (
        <LocationContext.Provider value={{selectedLocation, setSelectedLocation}}>
            {
                children
            }
        </LocationContext.Provider>
    );
};

export default LocationProvider;