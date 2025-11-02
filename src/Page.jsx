import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";


const Page = () => {
    return (
        <div className="grid place-items-center h-screen bg-no-repeat bg-cover">
            <Header />
            <main>
                <section>
                    <WeatherBoard />
                </section>
            </main>
        </div>
    );
};

export default Page;