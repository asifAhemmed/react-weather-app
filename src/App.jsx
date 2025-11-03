import Page from "./page";
import { WeatherProvider } from "./provider";


const App = () => {
  return (
    <WeatherProvider>
      <Page />
    </WeatherProvider>
  );
};

export default App;