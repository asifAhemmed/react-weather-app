import { useContext, useState } from "react";
import SearchIcon from "../../assets/search.svg";
import { getLocationByName } from "../../data/location-data";
import { LocationContext } from "../../context";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const {setSelectedLocation} = useContext(LocationContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        const { longitude, latitude, location } = getLocationByName(searchTerm);
        setSelectedLocation({ longitude, latitude, location });
    }
    return (
        <form action="#" onSubmit={handleSubmit}>
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <input className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                    type="search" 
                    placeholder="Search Location"
                    required 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">
                    <img src={SearchIcon} />
                </button>
            </div>
        </form>
    );
};

export default Search;