import { useContext, useState } from "react";
import HeartIcon from "../../assets/heart.svg";
import RedHeartIcon from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../context";

const AddToFavorite = () => {
    const [isFavorite , setIsFavorite] = useState(false);
    const { favorites,addToFavorites,removeFromFavorites } = useContext(FavoriteContext);
    const { weatherData } = useContext(WeatherContext);
    const { location,longitude,latitude } = weatherData;
    const handleFavorite = () => {
        const found = favorites.find(favorite => favorite.location === location);
        if(!found) {
            addToFavorites(longitude,latitude,location);
        }else{
            removeFromFavorites(location);
        }
        setIsFavorite(!isFavorite);
    }
    return (
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button onClick={handleFavorite} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
                    <span>{isFavorite ? "Remove from favorite" : "Add to favorite"}</span>
                    <img src={isFavorite ? RedHeartIcon : HeartIcon} alt="" />
                </button>

            </div>
        </div>
    );
};

export default AddToFavorite;