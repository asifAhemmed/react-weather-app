import Page from "./page";
import { FavoriteProvider, WeatherProvider } from "./provider";


const App = () => {
  return (
    <WeatherProvider>
      <FavoriteProvider>
        <Page />
      </FavoriteProvider>
    </WeatherProvider>
  );
};

export default App;