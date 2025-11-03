import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";


const FavoriteProvider = ({children}) => {
    const [favorites, setFavorites] = useLocalStorage('favorites', []);
    const addToFavorites = (longitude, latitude,location) => {
        setFavorites([...favorites, {longitude, latitude,location}]);
    }
    const removeFromFavorites = (location) => {
        setFavorites(favorites.filter(favorite => favorite.location !== location));
    }
    return (
        <FavoriteContext.Provider value={{favorites,addToFavorites,removeFromFavorites}}>
            {
                children
            }
        </FavoriteContext.Provider>
    );
};

export default FavoriteProvider;